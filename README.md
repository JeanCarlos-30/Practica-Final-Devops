#  Práctica Final DevOps CI/CD

**Autor:** jeacarlos3015  
**Stack:** Node.js · Express · Jest · Docker · GitHub Actions · Render.com

---

##  Estructura

```
Practica-Final-Devops/
├── .github/workflows/ci-cd.yml  ← Pipeline automático
├── public/index.html            ← Página web
├── tests/app.test.js            ← Pruebas unitarias
├── server.js                    ← Servidor Express
├── package.json                 ← Dependencias
├── Dockerfile                   ← Imagen Docker
└── .dockerignore
```

---

##  Pipeline CI/CD

Cada `git push` a `main` ejecuta automáticamente:

```
push →  Tests →  Docker Hub →  Render.com
```

---

##  Pruebas unitarias

Se prueban 4 endpoints con Jest + Supertest:

- `GET /` → status 200
- `GET /api/saludo` → retorna `¡Hola Mundo!`
- `GET /health` → status OK
- `GET /ruta-inexistente` → status 404

---

##  Secrets requeridos

| Secret | Descripción |
|---|---|
| `DOCKER_USERNAME` | Usuario Docker Hub |
| `DOCKER_TOKEN` | Token de Docker Hub |
| `RENDER_DEPLOY_HOOK_URL` | Deploy Hook de Render.com |

---

##  App en producción

https://practica-final-devops-ygo7.onrender.com