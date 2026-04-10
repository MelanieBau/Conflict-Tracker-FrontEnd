<template>
  <div class="create-page">
    <RouterLink to="/conflicts" class="volver">← Volver a la lista</RouterLink>

    <div class="page-header">
      <h1>Nuevo Conflicto</h1>
      <p>Rellena los datos para registrar un nuevo conflicto</p>
    </div>

    <form class="formulario" @submit.prevent="enviar">
      <div class="campo">
        <label>Nombre</label>
        <input v-model="form.name" type="text" placeholder="Nombre del conflicto" required />
      </div>

      <div class="campo">
        <label>Estado</label>
       <select v-model="form.status">
  <option value="ACTIVE">Activo</option>
  <option value="ENDED">Finalizado</option>
  <option value="FROZEN">Congelado</option>
    </select>
      </div>

      <div class="campo">
        <label>Fecha de inicio</label>
        <input v-model="form.startDate" type="date" required />
      </div>

      <div class="campo">
        <label>Códigos de países (separados por coma)</label>
        <input v-model="countriesInput" type="text" placeholder="Ej: RUS, USA, UKR" />
        <span class="hint">Países disponibles: RUS, USA, UKR, SYR, AZE, ARM</span>
      </div>

      <div class="campo">
        <label>Descripción</label>
        <textarea v-model="form.description" placeholder="Descripción del conflicto" rows="4"></textarea>
      </div>

      <div class="acciones">
        <button type="submit" class="btn-crear">Crear conflicto</button>
        <RouterLink to="/conflicts" class="btn-cancelar">Cancelar</RouterLink>
      </div>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter, RouterLink } from 'vue-router'
import { useConflictStore } from '../stores/conflictStore'

const store = useConflictStore()
const router = useRouter()

const countriesInput = ref('')

const form = ref({
  name: '',
  status: 'ACTIVE',
  startDate: '',
  description: '',
  countryCodes: []
})

const enviar = async () => {
  form.value.countryCodes = countriesInput.value
    .split(',')
    .map(c => c.trim().toUpperCase())
    .filter(c => c.length > 0)

  const data = {
    name: form.value.name,
    status: form.value.status,
    startDate: form.value.startDate,
    description: form.value.description,
    countryCodes: form.value.countryCodes
  }

  console.log('Enviando:', JSON.stringify(data))
  await store.addConflict(data)
  router.push('/conflicts')
}
</script>

<style scoped>
.create-page {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  max-width: 600px;
}

.volver {
  color: #9b6dff;
  text-decoration: none;
  font-size: 0.9rem;
}

.volver:hover {
  color: #c4a7f7;
}

.page-header h1 {
  font-size: 2rem;
  font-weight: 700;
  color: #e8e4f0;
  margin-bottom: 0.4rem;
}

.page-header p {
  color: #9b93b0;
  font-size: 0.95rem;
}

.formulario {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  background: #1e1a2e;
  border: 1px solid #2e2740;
  border-radius: 12px;
  padding: 2rem;
}

.campo {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

label {
  font-size: 0.82rem;
  font-weight: 600;
  color: #9b6dff;
  text-transform: uppercase;
  letter-spacing: 0.6px;
}

input, select, textarea {
  padding: 0.7rem 0.9rem;
  background: #12101a;
  border: 1px solid #2e2740;
  border-radius: 8px;
  font-size: 0.95rem;
  color: #e8e4f0;
  outline: none;
  transition: border-color 0.2s;
}

input::placeholder, textarea::placeholder {
  color: #4a4460;
}

input:focus, select:focus, textarea:focus {
  border-color: #6d3fd4;
}

select option {
  background: #1e1a2e;
}

textarea {
  resize: vertical;
  min-height: 100px;
}

.hint {
  font-size: 0.78rem;
  color: #4a4460;
}

.acciones {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding-top: 0.5rem;
}

.btn-crear {
  background: #6d3fd4;
  color: white;
  border: none;
  padding: 0.7rem 1.5rem;
  border-radius: 8px;
  cursor: pointer;
  font-size: 0.95rem;
  font-weight: 600;
  transition: background 0.2s;
}

.btn-crear:hover {
  background: #7c4fe0;
}

.btn-cancelar {
  color: #9b93b0;
  text-decoration: none;
  font-size: 0.9rem;
  transition: color 0.2s;
}

.btn-cancelar:hover {
  color: #e8e4f0;
}
</style>