#!/bin/bash

echo "🚀 Iniciando despliegue automatizado..."

# Agregar todos los cambios
git add .

# Crear un commit con mensaje automático con fecha
git commit -m "Actualización automática: $(date '+%Y-%m-%d %H:%M:%S')"

# Hacer push a la rama main
git push origin main

echo "✅ Despliegue enviado a GitHub. Vercel lo actualizará automáticamente."
