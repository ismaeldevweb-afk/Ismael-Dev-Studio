# Relatório de SEO - Ismael Dev Studio

Data da análise: 1 de maio de 2026  
URL analisada: https://ismaeldevstudio.vercel.app  
Base da análise: código-fonte do projeto e verificação HTTP/HTML da URL publicada.

## Resumo Executivo

O site tem uma base técnica sólida para SEO: metadados principais, canonical, Open Graph, Twitter Card, sitemap, robots.txt, HTTPS, headers de segurança, dados estruturados e conteúdo focado em serviços. A página também já possui blocos de conversão com CTA para WhatsApp, planos, projetos, FAQ e proposta de valor clara.

O principal ponto crítico encontrado é de conversão: o WhatsApp publicado ainda aponta para o número padrão `5500000000000`. Isso precisa ser corrigido nas variáveis de ambiente da Vercel para evitar perda direta de leads.

## Pontuação Geral

| Área | Nota | Status |
| --- | --- | --- |
| SEO técnico | 8.5/10 | Forte |
| Conteúdo e intenção de busca | 8/10 | Forte |
| Dados estruturados | 8/10 | Forte |
| Performance e experiência | 8/10 | Boa base |
| Conversão | 6.5/10 | Boa estrutura, mas com risco crítico no WhatsApp |
| Autoridade e crescimento orgânico | 5/10 | Precisa de conteúdo e sinais externos |

Nota geral estimada: 7.5/10.

## Verificações Técnicas

| Item | Resultado |
| --- | --- |
| Status da página principal | `HTTP/2 200` |
| Hospedagem | Vercel |
| HTTPS | Ativo |
| Title | Presente |
| Meta description | Presente |
| Canonical | Presente |
| Open Graph | Presente |
| Twitter Card | Presente |
| JSON-LD | Presente |
| Sitemap | `https://ismaeldevstudio.vercel.app/sitemap.xml` retorna `200` |
| Robots | `https://ismaeldevstudio.vercel.app/robots.txt` retorna `200` |
| Analytics | Vercel Analytics ativo |
| Speed Insights | Vercel Speed Insights ativo |

## Title e Meta Description

Title atual:

```text
Criação de Sites Profissionais e Landing Pages | Ismael Dev Studio
```

Avaliação: bom. O title comunica serviço principal, inclui palavra-chave importante e mantém a marca no final.

Meta description atual:

```text
Criação de sites profissionais, landing pages e portfólios para pequenos negócios, autônomos e profissionais que querem gerar confiança, atrair clientes e receber contatos pelo WhatsApp.
```

Avaliação: boa. A descrição reforça público, serviço e benefício. Está bem alinhada para buscas como criação de sites, landing pages, site para autônomos e site com WhatsApp.

## Palavras-Chave Alvo

Palavras-chave principais já cobertas:

- criação de sites profissionais
- criação de sites para pequenos negócios
- landing page para pequenos negócios
- desenvolvedor de sites
- portfólio profissional
- site responsivo
- site com WhatsApp
- site para autônomos
- landing page profissional
- site institucional

Oportunidades para próximas páginas ou conteúdos:

- criação de site para restaurante
- criação de site para advogado
- criação de site para psicólogo
- criação de site para loja
- landing page para prestador de serviço
- site profissional em [cidade/região]
- quanto custa uma landing page
- como ter um site profissional

## Dados Estruturados

Schemas presentes:

- `ProfessionalService`
- `WebSite`
- `FAQPage`
- `Offer` dentro do serviço profissional

Avaliação: forte. A estrutura ajuda buscadores a entenderem o tipo de negócio, serviços, planos e perguntas frequentes.

Recomendação futura:

- Configurar telefone, e-mail, GitHub e LinkedIn reais nas variáveis de ambiente para enriquecer o schema com dados de contato e perfis oficiais.
- Se houver endereço ou região de atendimento prioritária, adicionar `areaServed` mais específica.

## Conteúdo e Conversão

Pontos fortes:

- Hero comunica proposta de valor rapidamente.
- CTAs claros para orçamento no WhatsApp.
- Seções de serviços, projetos, processo, planos, sobre e FAQ.
- Conteúdo fala com pequenos negócios, autônomos e profissionais liberais.
- FAQ remove objeções comuns antes do contato.
- Planos com preço inicial ajudam a qualificar leads.

Ponto crítico:

- O link público do WhatsApp está usando o número padrão:

```text
https://wa.me/5500000000000
```

Impacto: alto. O visitante pode clicar para pedir orçamento e não chegar ao contato real.

Correção recomendada na Vercel:

```text
NEXT_PUBLIC_WHATSAPP_NUMBER=55DDDNUMERO
```

Exemplo:

```text
NEXT_PUBLIC_WHATSAPP_NUMBER=5511999999999
```

Depois de configurar, faça um novo deploy.

## Sitemap e Robots

Sitemap:

```text
https://ismaeldevstudio.vercel.app/sitemap.xml
```

Robots:

```text
https://ismaeldevstudio.vercel.app/robots.txt
```

Avaliação: ambos estão ativos e acessíveis.

Observação: o site atualmente possui uma página principal. Para crescimento orgânico, o sitemap deve evoluir quando novas páginas forem adicionadas.

## Performance e Experiência

Pontos positivos:

- Next.js com renderização otimizada.
- Imagens públicas em formatos modernos, incluindo WebP.
- Fontes locais com `next/font/local`.
- Vercel Speed Insights ativo.
- Página estática/prerenderizada pela Vercel.

Riscos a monitorar:

- Imagem `public/profile-photo.png` é grande no repositório, embora a versão WebP seja usada no site.
- Home com muitas imagens pode exigir acompanhamento em mobile.
- A nota real de Core Web Vitals deve ser acompanhada no painel da Vercel e no Google Search Console.

## Segurança e Confiança

Headers encontrados:

- `Content-Security-Policy`
- `Strict-Transport-Security`
- `X-Content-Type-Options`
- `X-Frame-Options`
- `Referrer-Policy`
- `Permissions-Policy`

Avaliação: forte. Esses headers não ranqueiam diretamente por si só, mas ajudam confiabilidade técnica e reduzem riscos.

## Prioridades

### Alta prioridade

1. Corrigir o número do WhatsApp na Vercel.
2. Configurar `NEXT_PUBLIC_CONTACT_EMAIL` real.
3. Configurar `NEXT_PUBLIC_GITHUB_URL` e `NEXT_PUBLIC_LINKEDIN_URL` reais.
4. Cadastrar o domínio no Google Search Console.
5. Enviar o sitemap no Search Console.

### Média prioridade

1. Criar páginas específicas para serviços: landing pages, sites profissionais, portfólios e soluções com IA.
2. Criar páginas por nicho: restaurantes, lojas, profissionais autônomos e negócios locais.
3. Adicionar depoimentos reais ou provas sociais quando disponíveis.
4. Criar uma seção de resultados/cases com contexto, desafio e solução.
5. Monitorar Analytics e Speed Insights após tráfego real.

### Baixa prioridade

1. Criar blog ou guias educativos para buscas informacionais.
2. Adicionar domínio personalizado próprio.
3. Criar estratégia de backlinks com perfis profissionais, redes sociais e diretórios relevantes.

## Plano de Ação Sugerido

Primeiros 7 dias:

- Corrigir WhatsApp, e-mail e links sociais.
- Conferir se o novo deploy mostra o número correto.
- Cadastrar site no Google Search Console.
- Enviar sitemap.

Próximos 30 dias:

- Criar 3 páginas de serviço com conteúdo específico.
- Criar pelo menos 2 páginas por nicho de cliente.
- Adicionar prova social, prints ou cases reais.
- Revisar dados do Vercel Analytics.

Próximos 90 dias:

- Publicar conteúdos voltados a dúvidas comerciais, como preço, prazo, benefícios e exemplos.
- Trabalhar autoridade externa com links de GitHub, LinkedIn, Instagram e portfólios.
- Otimizar páginas que receberem impressões no Search Console, mas poucos cliques.

## Conclusão

O projeto está bem preparado tecnicamente para indexação e tem uma estrutura comercial melhor que a média de sites institucionais simples. A maior perda possível hoje não está no Google, mas na conversão: o WhatsApp precisa ser configurado com o número real.

Depois dessa correção, o próximo salto de SEO virá da criação de páginas específicas para serviços e nichos, porque uma única home dificilmente cobre todas as buscas comerciais relevantes.
