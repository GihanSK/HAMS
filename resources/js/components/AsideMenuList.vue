<template>
  <ul :class="{'menu-list':!isSubmenuList}">
    <aside-menu-item v-for="(item,index) in menu"
    v-if="item.role == userRole || item.role =='all'"
      :key="index"
      :item="item"
      @menu-click="menuClick"
    />
  </ul>
</template>

<script>
import { mapState } from 'vuex'
import AsideMenuItem from '@/components/AsideMenuItem'

export default {
  name: 'AsideMenuList',
  components: {
    AsideMenuItem
  },
  props: {
    isSubmenuList: {
      type: Boolean,
      default: false
    },
    menu: {
      type: Array,
      default: () => []
    }
  },

  computed:{
    ...mapState(['isNavBarVisible', 'isAsideMobileExpanded', 'userRole']),
  },

  methods: {
    menuClick (item) {
      this.$emit('menu-click', item)
    }
  }
}
</script>
