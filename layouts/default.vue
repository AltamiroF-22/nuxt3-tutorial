<template>
  <div>
    <p>{{ $t('welcome') }}</p>
    <div>
      <select v-model="locale" @change="changeLocale" title="selecione o idioma">
        <option value="en">English</option>
        <option value="pt">Português</option>
        <option value="fr">Français</option>
      </select>
    </div>
    <slot></slot>
    <p>Footer</p>
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n';

const { locale, setLocale } = useI18n();

const changeLocale = (event) => {
  setLocale(event.target.value);  // Muda o idioma para o selecionado
};
</script>
