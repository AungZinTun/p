import Data from '@/store/data'
import Vue from 'vue'
export const state = {
    Data,
    clinicians: Object.values(Data.clinicians),
}
export const getters = {
    users: state => { return state.Data.users },
    bookings: state => { return Object.values(state.Data.bookings) },
    clinicians: state => { return state.Data.clinicians },
    clinician_select: (state, getters) => {
         return state.clinicians.map((c) => {
             return ({
                 clinician_id: c.id,
                 userId: getters.users[c.userId].name,
                 available_time: Object.values(c.available_time),
                 speciality: c.speciality_mm,
                 type: Object.keys(c.online_offline),
                 gender: getters.users[c.userId].gender,
                })
            })
        },
// for data table
    booking_list: (state, getters) => {
        return Object.values(state.Data.bookings).map((b) => {
            return ({
                id: b.id,
                date: b.date,
                time: b.time,
                consultation_type: b.consultation_type,
                token: b.token,
                name: getters.users[b.userId].name,
                clinician: getters.users[getters.clinicians[b.clinician_id].userId].name,
                status: b.status,
                })
        })
    },
}

export const actions = {
    createUser (context, { user, booking }) {
        const userId = 'U' + Math.random().toString().slice(2, 24)
        const bookingId = 'B' + Math.random().toString().slice(2, 24)
        user.bookings = { [bookingId]: bookingId }
        context.commit('setUser', { user, userId, bookingId })
        context.commit('setBooking', { booking, bookingId, userId })
    },
}

export const mutations = {
    setUser (state, { user, userId, bookingId }) {
        Vue.set(state.Data.users, userId, user)
    },
    setBooking (state, { booking, bookingId, userId }) {
        Vue.set(state.Data.bookings, bookingId, booking)
        Vue.set(booking, 'userId', userId)
    },
    specialityChange (state, speciality) {
        const clinicians = Object.values(state.Data.clinicians)
        state.clinicians = clinicians.filter(clinician => {
            return clinician.speciality === speciality
        })
    },
}
