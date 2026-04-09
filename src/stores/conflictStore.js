import { defineStore } from 'pinia'
import { getConflicts, getConflictById, createConflict, deleteConflict } from '../services/api'

export const useConflictStore = defineStore('conflict', {
  state: () => ({
    conflicts: [],
    currentConflict: null,
    loading: false,
    error: null
  }),

  actions: {
    async fetchConflicts() {
      this.loading = true
      try {
        const response = await getConflicts()
        this.conflicts = response.data
      } catch (e) {
        this.error = 'Error al cargar los conflictos'
      } finally {
        this.loading = false
      }
    },

    async fetchConflictById(id) {
      this.loading = true
      try {
        const response = await getConflictById(id)
        this.currentConflict = response.data
      } catch (e) {
        this.error = 'Error al cargar el conflicto'
      } finally {
        this.loading = false
      }
    },

    async addConflict(conflict) {
      try {
        await createConflict(conflict)
        await this.fetchConflicts()
      } catch (e) {
        this.error = 'Error al crear el conflicto'
      }
    },

    async removeConflict(id) {
      try {
        await deleteConflict(id)
        await this.fetchConflicts()
      } catch (e) {
        this.error = 'Error al eliminar el conflicto'
      }
    }
  }
})