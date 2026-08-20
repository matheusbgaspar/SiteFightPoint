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
```

## Comandos

| Comando            | Descrição                                        |
| ------------------ | ------------------------------------------------ |
| `npm install`      | Instala as dependências                          |
| `npm start`        | Servidor de desenvolvimento em `http://localhost:4200` |
| `npm run build`    | Build de produção em `dist/fight-point-site`     |
| `npm test`         | Executa os testes unitários                      |

## Próximos passos

- Substituir textos placeholder por informações reais (história, professores, horários).
- Enviar fotos: usar o componente `<app-photo>` passando `[src]` (ex.: `/assets/fotos/karate.jpg`). Enquanto `src` estiver vazio, aparece um placeholder guiando onde a foto entra.
- Aplicar a identidade visual final (logo, cores, fontes).
- Preencher endereço completo, WhatsApp e e-mail reais.
- Publicar o conteúdo de `dist/` em qualquer hospedagem estática (GitHub Pages, Netlify, Vercel etc.).
