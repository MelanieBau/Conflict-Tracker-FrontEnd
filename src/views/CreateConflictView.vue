<template>
  <div>
    <RouterLink to="/conflicts">← Volver a la lista</RouterLink>
    <h1>Nuevo Conflicto</h1>

    <form class="formulario" @submit.prevent="enviar">
      <div class="campo">
        <label>Nombre</label>
        <input v-model="form.name" type="text" placeholder="Nombre del conflicto" required />
      </div>

      <div class="campo">
        <label>País</label>
        <input v-model="form.country" type="text" placeholder="País" required />
      </div>

      <div class="campo">
        <label>Región</label>
        <input v-model="form.region" type="text" placeholder="Región" required />
      </div>

      <div class="campo">
        <label>Estado</label>
        <select v-model="form.status">
          <option value="ACTIVE">Activo</option>
          <option value="FINISHED">Finalizado</option>
        </select>
      </div>

      <div class="campo">
        <label>Fecha de inicio</label>
        <input v-model="form.startDate" type="date" required />
      </div>

      <div class="campo">
        <label>Fecha de fin</label>
        <input v-model="form.endDate" type="date" />
      </div>

      <div class="campo">
        <label>Descripción</label>
        <textarea v-model="form.description" placeholder="Descripción del conflicto" rows="4"></textarea>
      </div>

      <button type="submit">Crear conflicto</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter, RouterLink } from 'vue-router'
import { useConflictStore } from '../stores/conflictStore'

const store = useConflictStore()
const router = useRouter()

const form = ref({
  name: '',
  country: '',
  region: '',
  status: 'ACTIVE',
  startDate: '',
  endDate: '',
  description: ''
})

const enviar = async () => {
  await store.addConflict(form.value)
  router.push('/conflicts')
}
</script>

<style scoped>
a {
  color: #e94560;
  text-decoration: none;
  display: inline-block;
  margin-bottom: 1.5rem;
}

h1 {
  font-size: 2rem;
  margin-bottom: 1.5rem;
}

.formulario {
  max-width: 600px;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.campo {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

label {
  font-weight: bold;
  font-size: 0.9rem;
  color: #444;
}

input, select, textarea {
  padding: 0.75rem;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 1rem;
}

button {
  background: #1a1a2e;
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  cursor: pointer;
  font-size: 1rem;
  width: fit-content;
}

button:hover {
  background: #e94560;
}
</style>