<template>
  <BaseCard>
    <div class="card-header">
      <div class="flags">
        <img
          v-for="country in conflict.countries"
          :key="country"
          :src="`https://flagcdn.com/24x18/${countryCode(country)}.png`"
          :alt="country"
          :title="country"
          class="flag"
        />
      </div>
      <span class="badge" :class="conflict.status === 'ACTIVE' ? 'activo' : conflict.status === 'FROZEN' ? 'frozen' : 'finalizado'">
        {{ conflict.status === 'ACTIVE' ? 'Activo' : conflict.status === 'FROZEN' ? 'Congelado' : 'Finalizado' }}
      </span>
    </div>

    <h2>{{ conflict.name }}</h2>
    <p class="fecha">{{ conflict.startDate }}</p>
    <p class="paises">{{ conflict.countries.join(', ') }}</p>

    <div class="acciones">
      <RouterLink :to="`/conflicts/${conflict.id}`">Ver detalle →</RouterLink>
      <button @click="$emit('eliminar', conflict.id)">Eliminar</button>
    </div>
  </BaseCard>
</template>

<script setup>
import { RouterLink } from 'vue-router'
import BaseCard from './BaseCard.vue'

defineProps({
  conflict: {
    type: Object,
    required: true
  }
})

defineEmits(['eliminar'])

const countryCode = (code) => {
  const map = {
    'UKR': 'ua',
    'RUS': 'ru',
    'USA': 'us',
    'SYR': 'sy',
    'ARM': 'am',
    'AZE': 'az'
  }
  return map[code] || code.toLowerCase().slice(0, 2)
}
</script>

<style scoped>
.card-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.75rem;
}

.flags {
  display: flex;
  gap: 0.4rem;
  align-items: center;
}

.flag {
  border-radius: 2px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.3);
}

h2 {
  font-size: 1.05rem;
  font-weight: 600;
  color: #e8e4f0;
  margin-bottom: 0.4rem;
}

.fecha {
  color: #9b93b0;
  font-size: 0.85rem;
  margin-bottom: 0.25rem;
}

.paises {
  color: #9b93b0;
  font-size: 0.82rem;
  margin-bottom: 0.25rem;
}

.badge {
  display: inline-block;
  padding: 0.2rem 0.7rem;
  border-radius: 20px;
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.5px;
}

.badge.activo {
  background: #3a1f6e;
  color: #c4a7f7;
  border: 1px solid #6d3fd4;
}

.badge.finalizado {
  background: #1a3a2a;
  color: #56d98a;
  border: 1px solid #2ea043;
}

.badge.frozen {
  background: #1a2a3a;
  color: #56b4d9;
  border: 1px solid #2a7a9b;
}

.acciones {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-top: 1rem;
  padding-top: 1rem;
  border-top: 1px solid #2e2740;
}

a {
  color: #9b6dff;
  text-decoration: none;
  font-size: 0.88rem;
  font-weight: 500;
}

a:hover {
  color: #c4a7f7;
}

button {
  background: none;
  border: 1px solid #3a3050;
  color: #9b93b0;
  padding: 0.25rem 0.75rem;
  border-radius: 6px;
  cursor: pointer;
  font-size: 0.82rem;
  transition: all 0.2s;
}

button:hover {
  border-color: #e94560;
  color: #e94560;
}
</style>