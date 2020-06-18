<template>
  <v-container
    id="dashboard"
    tag="section"
  >
    <v-row>
      <!-- table -->
      <v-col
        cols="12"
        sm="12"
        md="12"
      >
        <v-card class="mx-auto">
          <v-card-title>
            <v-spacer />
            <v-text-field
              v-model="search"
              append-icon="mdi-magnify"
              label="Search"
              single-line
              hide-details
            />
          </v-card-title>
          <v-card-text>
            <v-data-table
              :headers="headers"
              :items="booking_list"
              :search="search"
              :mobile-breakpoint="300"
            >
              <template v-slot:item.status="{ item }">
                <v-chip
                  small
                  :color="getColor(item.status)"
                  link
                >
                  {{ item.status }}
                </v-chip>
              </template>
            </v-data-table>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>

  import { mapGetters } from 'vuex'
  export default {
    name: 'BookingIndex',
    components: {
    },

    data () {
      return {
        snackbar: false,
        search: '',
        headers: [
          {
            sortable: true,
            text: '#',
            value: 'token',
          },
          {
            sortable: true,
            text: 'Clinician',
            value: 'clinician',
          },
          {
            align: 'start',
            sortable: true,
            text: 'Name',
            value: 'name',
          },
          {
            sortable: true,
            text: 'Type',
            value: 'consultation_type',
          },
          {
            sortable: true,
            text: 'Date',
            value: 'date',
          },
          {
            sortable: true,
            text: 'Time',
            value: 'time',
          },
          {
            sortable: true,
            text: 'Status',
            value: 'status',
          },
        ],
      }
    },
    computed: {
      ...mapGetters(['booking_list']),
    },
    methods: {
      getColor (status) {
        if (status === 'completed') return 'green'
        else if (status === 'pending') return 'orange'
        else return 'red'
      },
    },
  }
</script>
