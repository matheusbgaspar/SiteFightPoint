# Fight Point – Site da Academia

Site institucional (estático) da **Fight Point**, academia de artes marciais localizada no
Jardim Santo Elias, São Paulo – SP, comandada pelo **Shihan Iuri Messias**.

Modalidades: **Karatê, Muay Thai, Jiu-Jitsu, Boxe e MMA**.

## Tecnologias

- [Angular](https://angular.dev) 22 (standalone components, lazy loading)
- [Angular Material](https://material.angular.dev) 22 (Material 3)
- SCSS
- Roteamento com hash (`/#/...`) para funcionar em qualquer hospedagem estática

## Estrutura

```
src/app/
├─ core/
│  ├─ models.ts              # Interfaces (Modality, Schedule, NavItem...)
│  └─ data/
│     ├─ modalities.ts       # Dados das 5 modalidades
│     ├─ schedule.ts         # Grade de horários (placeholder)
│     ├─ contact.ts          # Endereço, Instagram, WhatsApp, mapas
│     └─ navigation.ts       # Itens de navegação
├─ shell/
│  ├─ header/                # Barra superior + nav desktop + CTA
│  └─ footer/                # Rodapé com links e contato
├─ shared/
│  └─ photo-placeholder/     # Componente de foto com placeholder (guia onde a foto entra)
└─ pages/
   ├─ home/                  # Página inicial (hero, modalidades, contato)
   ├─ about/                 # Sobre a academia e o Shihan Iuri Messias
   ├─ modalities/            # Detalhes das modalidades
   ├─ schedule/              # Grade semanal de horários
   └─ contact/               # Contato, mapa e formulário (WhatsApp)

public/
├─ favicon.ico
└─ assets/                   # Imagens servidas em /assets/* (copiadas no build)
   ├─ logo/                  # Logos da marca — /assets/logo/*
   └─ fotos/                 # Fotos de treinos e aulas — /assets/fotos/*
```

> Imagens ficam em `public/assets/`, organizadas por categoria (`logo/`, `fotos/`).
> A pasta `Images/` na raiz **não funciona**: o Angular só serve arquivos que estão em `public/`.
> Referencie como `/assets/logo/fp-logo-black.jpg`, etc.

## Comandos

| Comando            | Descrição                                        |
| ------------------ | ------------------------------------------------ |
| `npm install`      | Instala as dependências                          |
| `npm start`        | Servidor de desenvolvimento em `http://localhost:4200` |
| `npm run build`    | Build de produção em `dist/fight-point-site`     |
| `npm test`         | Executa os testes unitários                      |

## Publicação (GitHub Pages)

O repositório já inclui o workflow `.github/workflows/deploy-pages.yml` que builda o site e
publica em `https://matheusbgaspar.github.io/SiteFightPoint/`.

Para ativar (uma vez só):

1. **Visibilidade**: no plano gratuito do GitHub, Pages só funciona em repositório **público**.
   Em `Settings > General > Danger Zone > Change repository visibility`, mude para `Public`
   (ou use um plano pago Pro/Team para manter privado).
2. **Fonte do Pages**: em `Settings > Pages > Build and deployment > Source`, selecione
   `GitHub Actions`.
3. Pronto — a cada push para `main`, o workflow faz o deploy automaticamente.
   Também dá para rodar manualmente em `Actions > Deploy to GitHub Pages > Run workflow`.

> ⚠️ `Repo.env` contém credenciais e é ignorado por `.gitignore` — **nunca** faça commit dele.
> Se ele foi exposto em algum momento, gere um novo token em GitHub > Settings > Developer settings.

## Próximos passos

- Substituir textos placeholder por informações reais (história, professores, horários).
- Enviar fotos: usar o componente `<app-photo>` passando `[src]` (ex.: `/assets/fotos/karate.jpg`). Enquanto `src` estiver vazio, aparece um placeholder guiando onde a foto entra.
- Aplicar a identidade visual final (logo, cores, fontes).
- Preencher endereço completo, WhatsApp e e-mail reais.
