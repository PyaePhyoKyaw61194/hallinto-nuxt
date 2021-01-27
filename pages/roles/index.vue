<template>
  <v-row align="center" justify="center">
    <v-col cols="10">
      <v-data-table
        :headers="headers"
        :items="roles"
        :items-per-page="10"
        :expanded.sync="expanded"
        single-expand
        show-expand
        item-key="name"
      >
        <template #top>
          <v-btn @click="editing = !editing">
            {{ editing ? 'Cancel Edit' : 'Edit' }}
          </v-btn>
        </template>
        <template #[`item.name`]="{ item }">
          <span v-if="!editing">{{ item.name }}</span>
          <v-text-field
            v-else
            v-model="item.name"
            outlined
            dense
            filled
            hide-details="auto"
          />
        </template>
        <template #expanded-item="{ headers, item }">
          <td :colspan="headers.length">
            {{ item.description }}
          </td>
        </template>
      </v-data-table>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import Role from '@/vuex-orm/models/Role'
const dummyRoles = [
  {
    id: 1,
    name: 'Admin',
    description: 'Admin of the Nanyan',
  },
  {
    id: 2,
    name: 'Manager',
    description: 'Manager of Nanyan',
  },
  {
    id: 3,
    name: 'Staff',
    description: 'Staff of Nanyan',
  },
]
@Component({
  layout: 'dashboard',
})
export default class PagesRoles extends Vue {
  editing: boolean = false
  expanded: any[] = []
  headers = [
    { text: 'No', value: 'id' },
    { text: 'Name', value: 'name' },
  ]
  get roles() {
    return Role.all()
  }
  mounted() {
    Role.deleteAll()
    Role.insert({
      data: dummyRoles,
    })
  }
}
</script>