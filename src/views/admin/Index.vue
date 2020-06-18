<template>
  <v-app>
    <dashboard-core-app-bar />

    <dashboard-core-drawer />

    <dashboard-core-view />

    <!-- <dashboard-core-settings /> -->
    <create />
  </v-app>
</template>

<script>
  export default {
    name: 'DashboardIndex',

    components: {
      Create: () => import('@/views/admin/pages/bookings/create'),
      DashboardCoreAppBar: () => import('./components/core/AppBar'),
      DashboardCoreDrawer: () => import('./components/core/Drawer'),
      // DashboardCoreSettings: () => import('./components/core/Settings'),
      DashboardCoreView: () => import('./components/core/View'),
    },

    data: () => ({
      expandOnHover: false,
    }),
  }
</script>
