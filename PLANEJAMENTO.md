# Planejamento do Projeto - Portfólio Pessoal

## 📌 Tema Escolhido
**Portfólio Pessoal**

## 🎯 Objetivo do Site
Criar uma apresentação profissional online que destaque minha formação multidisciplinar, experiências, projetos desenvolvidos e formas de contato, servindo como cartão de visitas digital para oportunidades profissionais e acadêmicas.

## 🎨 Paleta de Cores

### Tema Claro
- **Cor Principal**: `#3b82f6` (Azul vibrante)
- **Cor Secundária**: `#60a5fa` (Azul claro)
- **Cor de Fundo**: `#f5f5f5` (Cinza muito claro)
- **Cor de Fundo Secundária**: `#ffffff` (Branco)
- **Cor de Texto**: `#222222` (Preto suave)
- **Cor de Texto Secundária**: `#555555` (Cinza escuro)

### Tema Escuro (Automático)
- **Cor Principal**: `#60a5fa` (Azul claro)
- **Cor Secundária**: `#3b82f6` (Azul vibrante)
- **Cor de Fundo**: `#121212` (Preto)
- **Cor de Fundo Secundária**: `#1e1e1e` (Cinza muito escuro)
- **Cor de Texto**: `#e5e5e5` (Branco suave)
- **Cor de Texto Secundária**: `#cfcfcf` (Cinza claro)

## 🔤 Tipografia
- **Fonte Principal**: Arial, Helvetica, sans-serif (sistema)
- **Títulos**: Mesma fonte, com peso bold
- **Corpo de Texto**: Peso normal, line-height 1.7

## 🛠️ Framework CSS Escolhido
**Bootstrap 5.3.2** (via CDN)

### Justificativa:
- Amplamente utilizado no mercado
- Documentação completa e atualizada
- Sistema de grid robusto e responsivo
- Componentes prontos e customizáveis
- Compatibilidade com JavaScript moderno

## 📐 Esboço do Layout

### Estrutura Geral (Single Page Application)

```
┌─────────────────────────────────────────────┐
│  NAVBAR (fixo no topo)                      │
│  Logo | Início | Sobre | Formação |         │
│       | Projetos | Contato                  │
└─────────────────────────────────────────────┘

┌─────────────────────────────────────────────┐
│  CAROUSEL (Hero Section)                    │
│  - Slide 1: Apresentação (background CSS)   │
│  - Slide 2-4: Imagens com legendas          │
└─────────────────────────────────────────────┘

┌─────────────────────────────────────────────┐
│  SOBRE MIM                                  │
│  ┌──────┐  ┌─────────────────────────────┐ │
│  │ Foto │  │ Texto sobre formação e      │ │
│  │      │  │ experiências profissionais  │ │
│  └──────┘  └─────────────────────────────┘ │
└─────────────────────────────────────────────┘

┌─────────────────────────────────────────────┐
│  FORMAÇÃO                                   │
│  ┌─────────┐ ┌─────────┐ ┌─────────┐      │
│  │ Card 1  │ │ Card 2  │ │ Card 3  │      │
│  │ Técnico │ │ Bacharel│ │ Pós-Grad│      │
│  └─────────┘ └─────────┘ └─────────┘      │
│                                             │
│  Outros Cursos & Interesses                │
│  ┌─────────┐ ┌─────────┐ ┌─────────┐      │
│  │ Card 4  │ │ Card 5  │ │ Card 6  │      │
│  └─────────┘ └─────────┘ └─────────┘      │
└─────────────────────────────────────────────┘

┌─────────────────────────────────────────────┐
│  PROJETOS                                   │
│  ┌─────────────────────────────────────┐   │
│  │ Estação Meteorológica               │   │
│  │ - Descrição detalhada               │   │
│  │ - Tecnologias utilizadas            │   │
│  │ [Botão: Abrir Dashboard]            │   │
│  └─────────────────────────────────────┘   │
└─────────────────────────────────────────────┘

┌─────────────────────────────────────────────┐
│  CONTATO                                    │
│  ┌─────────────────────────────────────┐   │
│  │ Formulário:                         │   │
│  │ - Select: Assunto                   │   │
│  │ - Input: Nome                       │   │
│  │ - Input: E-mail                     │   │
│  │ - Textarea: Mensagem                │   │
│  │ - Checkbox: Confirmação             │   │
│  │ [Botão: Enviar Mensagem]            │   │
│  └─────────────────────────────────────┘   │
└─────────────────────────────────────────────┘

┌─────────────────────────────────────────────┐
│  FOOTER                                     │
│  ┌──────────────┐    ┌──────────────────┐  │
│  │ Nome         │    │ Links Sociais:   │  │
│  │ Matrícula    │    │ - Lattes         │  │
│  │ [Logo IFES]  │    │ - GitHub         │  │
│  └──────────────┘    │ - Contato        │  │
│                      └──────────────────┘  │
│  ─────────────────────────────────────────  │
│     © 2025 - Todos os direitos reservados  │
│                                             │
│  [Botão: Voltar ao Topo] (fixo, canto)     │
└─────────────────────────────────────────────┘
```

## 📋 Seções Planejadas

### 1. Navbar (Cabeçalho)
- Logo/Nome do site
- Menu de navegação responsivo (hamburger em mobile)
- Links para todas as seções
- Fixo no topo (sticky)

### 2. Início (Hero/Carousel)
- Carousel automático do Bootstrap
- Slide 1: Apresentação com nome, matrícula e descrição
- Slides 2-4: Imagens relacionadas ao tema
- Indicadores e controles de navegação

### 3. Sobre
- Foto pessoal
- Texto descritivo sobre formação e experiências
- Layout em duas colunas (foto + texto)
- Responsivo (empilha em mobile)

### 4. Formação
- Cards do Bootstrap para cada formação
- Ícones do Bootstrap Icons
- Hover effects
- Grid responsivo (3 colunas em desktop, 1 em mobile)
- Subdivisão: Graduações e Interesses

### 5. Projetos
- Card destacado com projeto principal
- Descrição detalhada
- Botão para acessar dashboard externo
- Ícone animado

### 6. Contato
- Formulário completo com validação JavaScript
- Campos: Assunto (select), Nome, E-mail, Mensagem, Confirmação
- Validação em tempo real
- Feedback visual ao enviar

### 7. Footer (Rodapé)
- Informações pessoais (nome, matrícula)
- Logo da instituição (IFES)
- Links para redes sociais/profissionais
- Copyright
- Botão "Voltar ao Topo"

## 🎯 Componentes Bootstrap a Utilizar

1. **Navbar** - Menu de navegação responsivo
2. **Carousel** - Apresentação de imagens
3. **Cards** - Exibição de formação e projetos
4. **Grid System** - Layout responsivo
5. **Buttons** - Botões estilizados
6. **Forms** - Formulário de contato
7. **Tooltips** - Dicas nos links sociais

## ⚙️ Funcionalidades JavaScript Planejadas

1. **Validação de Formulário**
   - Verificar campos obrigatórios
   - Validar formato de e-mail
   - Mensagens de erro específicas

2. **Feedback ao Usuário**
   - Alert com dados enviados
   - Reset do formulário após envio

3. **Botão Voltar ao Topo**
   - Aparecer após scroll
   - Scroll suave ao clicar

4. **Animações de Cards**
   - Efeito de entrada ao fazer scroll
   - Hover effects

5. **Inicialização de Componentes**
   - Tooltips do Bootstrap
   - Carousel automático

## 📱 Responsividade

### Breakpoints Bootstrap:
- **Mobile**: < 768px (1 coluna)
- **Tablet**: 768px - 991px (2 colunas)
- **Desktop**: ≥ 992px (3 colunas)

### Ajustes Personalizados:
- Navbar: Menu hamburger em mobile
- Carousel: Altura reduzida em mobile
- Cards: Empilhamento vertical em mobile
- Formulário: Largura total em mobile
- Footer: Layout vertical em mobile

## 🎨 Recursos Visuais

### Imagens Necessárias:
- [x] Foto pessoal (img_4143.jpg)
- [x] 3 imagens para carousel (IMG_4140.JPG, IMG_4141.jpg, IMG_4142.JPG)
- [x] Logo IFES - versão clara (IFES-Alegre-white.png)
- [x] Logo IFES - versão escura (IFES-Alegre-dark.png)

### Ícones:
- Bootstrap Icons 1.11.1 (via CDN)
- Ícones para cada card de formação
- Ícones para links sociais
- Ícones no formulário

## 🔄 Tema Claro/Escuro

- Detecção automática via `prefers-color-scheme`
- Variáveis CSS para cores
- Alternância de logo IFES
- Ajuste de todos os componentes

## ✅ Checklist de Desenvolvimento

- [x] Estrutura HTML semântica
- [x] Importação do Bootstrap via CDN
- [x] CSS personalizado em arquivo externo
- [x] JavaScript em arquivo externo
- [x] Navbar responsiva
- [x] Carousel funcional
- [x] Cards com grid responsivo
- [x] Formulário completo
- [x] Validação JavaScript
- [x] Botão voltar ao topo
- [x] Tooltips funcionais
- [x] Responsividade testada
- [x] Tema claro/escuro
- [x] README completo

---

**Data de Planejamento**: Semana 12  
**Aluno**: Oberdan Covre Gomes  
**Matrícula**: 20252EADS0249  
**Curso**: Tecnologia em Análise e Desenvolvimento de Sistemas  
**Instituição**: IFES - Campus Alegre
