# Budgt

Sitio de [budgt.cl](https://budgt.cl). Actualmente muestra una página de
"En construcción" con el logo de Budgt.

Construido con [Astro](https://astro.build) (salida estática).

## Comandos

| Comando           | Acción                                       |
| :---------------- | :------------------------------------------- |
| `npm install`     | Instala dependencias                         |
| `npm run dev`     | Servidor local en `localhost:4321`           |
| `npm run build`   | Genera el sitio estático en `./dist/`        |
| `npm run preview` | Previsualiza el build antes de publicar      |

## Estructura

```text
public/            # logo, favicons, robots.txt
src/pages/
└── index.astro    # página de "En construcción"
```

## Deploy

Cada push a `main` dispara `.github/workflows/deploy.yml`, que ejecuta
`deploy-budgt` por SSH en el VPS.
