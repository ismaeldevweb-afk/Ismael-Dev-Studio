# Ismael Dev Studio

Site institucional da Ismael Dev Studio, criado com Next.js, React, TypeScript e Tailwind CSS. O projeto apresenta serviços, projetos demonstrativos, processo de trabalho, planos e canais de contato com foco em sites profissionais, landing pages e presença digital.

## Tecnologias

- Next.js 14
- React 18
- TypeScript
- Tailwind CSS
- Lucide React
- Vitest

## Requisitos

- Node.js 18 ou superior
- npm

## Instalação

Clone o repositório e instale as dependências:

```bash
git clone https://github.com/ismaeldevweb-afk/Ismael-Dev-Studio.git
cd Ismael-Dev-Studio
npm install
```

## Desenvolvimento

Para iniciar o servidor de desenvolvimento:

```bash
npm run dev
```

Para usar uma porta específica, por exemplo `3001`:

```bash
npm run dev -- -p 3001
```

Depois acesse:

```text
http://localhost:3001
```

## Build de Produção

Gere a build otimizada:

```bash
npm run build
```

Depois inicie o servidor de produção:

```bash
npm run start
```

Com porta específica:

```bash
npm run start -- -p 3001
```

Importante: `npm run start` exige que `npm run build` tenha sido executado antes, pois ele depende da pasta `.next`.

## Scripts

| Comando | Descrição |
| --- | --- |
| `npm run dev` | Remove a build local e inicia o Next.js em modo desenvolvimento. |
| `npm run build` | Cria a build otimizada de produção. |
| `npm run start` | Inicia o servidor Next.js usando a build de produção. |
| `npm run typecheck` | Executa a validação de tipos com TypeScript. |
| `npm test` | Executa os testes com Vitest. |
| `npm run analyze` | Gera análise do bundle quando `ANALYZE=true`. |
| `npm run clean` | Remove a pasta `.next`. |

## Variáveis de Ambiente

As configurações públicas do site ficam em `src/config/site.ts` e podem ser sobrescritas com variáveis de ambiente.

| Variável | Descrição | Exemplo |
| --- | --- | --- |
| `NEXT_PUBLIC_SITE_URL` | URL pública do site usada em metadados, sitemap e Open Graph. | `https://seudominio.com` |
| `NEXT_PUBLIC_WHATSAPP_NUMBER` | Número do WhatsApp com código do país e DDD. | `5514991920560` |
| `NEXT_PUBLIC_CONTACT_EMAIL` | E-mail de contato exibido/usado pelo site. | `contato@seudominio.com` |
| `NEXT_PUBLIC_GITHUB_URL` | Link do perfil ou organização no GitHub. | `https://github.com/ismaeldevweb-afk` |
| `NEXT_PUBLIC_LINKEDIN_URL` | Link do perfil do LinkedIn. | `https://www.linkedin.com/in/ismael-nunes-dos-santos` |

Crie um arquivo `.env.local` para desenvolvimento local:

```bash
NEXT_PUBLIC_SITE_URL=http://localhost:3001
NEXT_PUBLIC_WHATSAPP_NUMBER=5514991920560
NEXT_PUBLIC_CONTACT_EMAIL=contato@seudominio.com
NEXT_PUBLIC_GITHUB_URL=https://github.com/ismaeldevweb-afk
NEXT_PUBLIC_LINKEDIN_URL=https://www.linkedin.com/in/ismael-nunes-dos-santos
```

O arquivo `.env.local` não deve ser commitado.

## Estrutura do Projeto

```text
src/
  app/                         Rotas, layout, metadados, sitemap e estilos globais
  config/                      Configurações públicas do site
  interfaces/
    components/marketing/      Componentes da página principal
    data/                      Conteúdo editável do site
    types/                     Tipos TypeScript da interface
  lib/                         Utilitários e testes
public/                        Imagens e arquivos públicos
middleware.ts                  Headers de segurança
next.config.mjs                Configuração do Next.js
```

## Edição de Conteúdo

Os principais textos, serviços, projetos, planos e destaques ficam em:

```text
src/interfaces/data/site-content.ts
```

As informações gerais do site, SEO, URL pública e links de contato ficam em:

```text
src/config/site.ts
```

As imagens públicas ficam em:

```text
public/
```

## Qualidade

Antes de publicar alterações, rode:

```bash
npm run typecheck
npm test
npm run build
```

## Deploy

O projeto está publicado na Vercel.

URL principal:

```text
https://ismaeldevstudio.vercel.app
```

Implantação atual:

```text
https://ismaeldevstudio-e1n7vnnfb-ismaeldevweb-afks-projects.vercel.app
```

Configurações recomendadas:

- Build command: `npm run build`
- Install command: `npm install`
- Output: padrão do Next.js
- Variáveis públicas: configurar as mesmas variáveis listadas na seção "Variáveis de Ambiente"

## Git

Fluxo básico de alteração:

```bash
git status
git add .
git commit -m "descrição da alteração"
git push
```
