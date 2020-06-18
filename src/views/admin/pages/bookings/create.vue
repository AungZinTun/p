<template>
  <v-row justify="center">
    <v-dialog
      v-model="dialog"
      fullscreen
      hide-overlay
      transition="dialog-bottom-transition"
    >
      <template v-slot:activator="{ on }">
        <v-btn
          color="green"
          dark
          fixed
          bottom
          right
          fab
          v-on="on"
        >
          <v-icon>mdi-plus</v-icon>
        </v-btn>
      </template>
      <v-card>
        <v-toolbar
          flat
        >
          <v-spacer />
          <v-toolbar-title small>
            <span>Booking</span>
          </v-toolbar-title>
          <v-spacer />
          <v-spacer />
          <v-toolbar-speciality_select>
            <v-btn
              text
              @click="dialog = false"
            >
              <v-icon>mdi-close</v-icon>
            </v-btn>
          </v-toolbar-speciality_select>
        </v-toolbar>
        <v-card-text>
          <v-form
            ref="form"
            class="px-3"
          >
            <v-text-field
              v-model="name"
              label="Name"
              prepend-icon="mdi-rename-box"
              :rules="inputRule"
            />
            <v-text-field
              v-model="age"
              type="number"
              label="age"
              prepend-icon="mdi-account-settings"
              :rules="imputRuleAge"
            />
            <v-radio-group
              v-model="sex"
              prepend-icon="mdi-human-male-female"
              row
              :rules="inputRule"
            >
              <v-radio
                label="Male"
                value="m"
              />
              <v-radio
                label="Female"
                value="f"
              />
            </v-radio-group>
            <v-text-field
              v-model="phone"
              label="Phone"
              type="number"
              prepend-icon="mdi-phone"
              :rules="inputRule"
            />
            <!-- select -->
            <v-select
              v-model="speciality"
              :items="speciality_select"
              attach
              chips
              label="Speciality"
              prepend-icon="mdi-chart-bubble"
              @change="speciality_change"
            />

            <v-select
              v-model="clinician_id"
              :items="clinician_select"
              item-value="clinician_id"
              item-text="userId"
              label="Clinician"
              :rules="inputRule"
              prepend-icon="mdi-stethoscope"
            />
            <v-menu
              v-model="menu2"
              :close-on-content-click="false"
              :nudge-right="40"
              transition="scale-transition"
              offset-y
              min-width="290px"
            >
              <template v-slot:activator="{ on }">
                <v-text-field
                  v-model="date"
                  label="ရက်စွဲ"
                  prepend-icon="mdi-clock"
                  readonly
                  :rules="inputRule"
                  v-on="on"
                />
              </template>
              <v-date-picker
                v-model="date"
                :rules="inputRule"
                @input="menu2 = false"
              />
            </v-menu>
            <v-spacer />
            <v-btn
              :loading="loading"
              class="success px-0 mb-5"
              @click="submit"
            >
              Add Booking
            </v-btn>
          </v-form>
        </v-card-text>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
  import { mapGetters, mapMutations } from 'vuex'
  export default {
    data () {
      return {
        speciality_select: [
          { value: 'OG', text: 'OG' },
          { value: 'Child', text: 'Child' },
          { value: 'Physician', text: 'Physician' }],

        dialog: false,
        notifications: false,
        sound: true,
        widgets: false,
        menu2: false,
        name: '',
        age: '',
        sex: '',
        phone: '',

        speciality: '',
        clinician_id: '',

        date: '',
        inputRule: [
          v => !!v || 'Required',
        ],
        imputRuleAge: [
          v => !!v || 'Required',
          v => (v && v.length <= 2) || 'Enter Valid Number',
        ],
      }
    },
    computed: {
      ...mapGetters(['clinician_select']),
    },

    methods: {
      submit () {
        if (this.$refs.form.validate()) {
          this.loading = true
          const user = {
            name: this.name,
            age: this.age,
            sex: this.sex,
            phone: this.phone,
          }
          const booking = {
            clinician_id: this.clinician_id,
            date: this.date,
            status: 'pending',
            consultation_type: 'online',
            time: '6:00AM',

          }
          this.$store.dispatch('createUser', { user, booking })
          this.$store.dispatch('createBooking', booking)
          this.loading = false
          this.dialog = false
          this.snackbar = true
          this.$store.commit('SET_SNACKBAR', this.snackbar)
        }
      },
      speciality_change () {
        this.$store.commit('specialityChange', this.speciality)
      },
      ...mapMutations({ setSnackbar: 'SET_SNACKBAR' }),

    },
  }
</script>
