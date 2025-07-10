# NLW Agents

Projeto desenvolvido durante o evento **NLW (Next Level Week)** da Rocketseat, focado em criar uma aplicação web moderna com React e TypeScript.

## 🚀 Tecnologias

- **React 19** - Biblioteca para construção de interfaces
- **TypeScript** - Superset do JavaScript com tipagem estática
- **Vite** - Build tool e dev server
- **Tailwind CSS 4** - Framework CSS utilitário
- **React Router DOM** - Roteamento para aplicações React
- **TanStack Query** - Gerenciamento de estado e cache de dados
- **Radix UI** - Componentes acessíveis e customizáveis
- **Lucide React** - Ícones modernos
- **Biome** - Linter e formatter (substituindo ESLint + Prettier)

## 📁 Estrutura do Projeto

```
src/
├── components/     # Componentes reutilizáveis
├── pages/         # Páginas da aplicação
├── lib/           # Utilitários e configurações
└── main.tsx       # Ponto de entrada
```

## 🛠️ Configuração e Instalação

### Pré-requisitos
- Node.js (versão 18 ou superior)
- npm ou yarn

### Instalação

1. Clone o repositório:
```bash
git clone <url-do-repositorio>
cd nlw-agents
```

2. Instale as dependências:
```bash
npm install
```

3. Execute o projeto em modo de desenvolvimento:
```bash
npm run dev
```

4. Acesse `http://localhost:5173` no seu navegador

### Scripts Disponíveis

- `npm run dev` - Inicia o servidor de desenvolvimento
- `npm run build` - Gera build de produção
- `npm run preview` - Visualiza o build de produção localmente

## 🎯 Funcionalidades

- Criação de salas
- Navegação entre páginas com React Router
- Gerenciamento de estado com TanStack Query
- Interface responsiva com Tailwind CSS
- Componentes acessíveis com Radix UI

## 📝 Padrões de Projeto

- **TypeScript** para tipagem estática
- **Path aliases** (`@/`) para imports mais limpos
- **Componentes funcionais** com hooks
- **Roteamento** baseado em componentes
- **Formatação automática** com Biome
- **Arquitetura modular** com separação de responsabilidades

---

Desenvolvido com 💜 durante o NLW da Rocketseat 