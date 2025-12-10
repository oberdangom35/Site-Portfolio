# Portfólio Pessoal - Oberdan Covre Gomes

## 📋 Descrição do Projeto

Este é um site portfólio pessoal desenvolvido como projeto final da disciplina de Desenvolvimento Front-End I. O site apresenta informações profissionais, acadêmicas e pessoais, incluindo formação, projetos desenvolvidos e formas de contato.

## 🎯 Tema do Site

**Portfólio Pessoal** - Apresentação profissional de Oberdan Covre Gomes, destacando sua formação multidisciplinar (Técnico em Informática, Bacharel em Ciências Biológicas, Pós-graduações em Gestão Ambiental e Gestão de Projetos), projetos desenvolvidos (Estação Meteorológica Automatizada) e interesses pessoais (astronomia, fotografia, trilhas, etc.).

## 🚀 Tecnologias Utilizadas

- **HTML5**: Estrutura semântica do site
- **CSS3**: Estilização personalizada e responsividade
- **JavaScript (ES6+)**: Interatividade e funcionalidades dinâmicas
- **Bootstrap 5.3.2**: Framework CSS para layout responsivo e componentes
- **Google Fonts**: Fonte Montserrat (Light 300) para a logo
- **Bootstrap Icons**: Ícones vetoriais para interface

## 📁 Estrutura do Projeto

```
Portfolio/
├── index.html              # Página principal (SPA - Single Page Application)
├── css/
│   └── style.css          # Estilos personalizados
├── js/
│   └── scripts.js         # Funcionalidades JavaScript
└── img/                   # Imagens do projeto
    ├── IMG_4140.JPG       # Imagem do carousel
    ├── IMG_4141.jpg       # Imagem do carousel
    ├── IMG_4142.JPG       # Imagem do carousel
    ├── img_4143.jpg       # Foto pessoal
    ├── IFES-Alegre-white.png  # Logo IFES (tema claro)
    └── IFES-Alegre-dark.png   # Logo IFES (tema escuro)
```

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

## 📱 Seções do Site

1. **Início (Hero)**: Apresentação com carousel automático
2. **Sobre**: Informações pessoais e profissionais
3. **Formação**: Graduações, pós-graduações e interesses
4. **Projetos**: Estação Meteorológica Automatizada (OCGWeather Bot)
5. **Contato**: Formulário de contato com validação

## ⚙️ Funcionalidades JavaScript Implementadas

### 1. Validação de Formulário
- Verificação de campos obrigatórios
- Validação de formato de e-mail
- Validação de seleção de assunto
- Validação de checkbox de confirmação
- Mensagens de erro específicas para cada campo

### 2. Feedback ao Usuário
- Mensagem de confirmação após envio do formulário
- Exibição dos dados enviados
- Reset automático do formulário após envio

### 3. Menu Mobile Responsivo
- Fechamento automático do menu ao clicar em um item (apenas em mobile)
- Detecção inteligente do estado do menu (expandido/recolhido)
- Utiliza API nativa do Bootstrap Collapse
- Melhora significativa na experiência do usuário mobile

### 4. Botão "Voltar ao Topo"
- Aparece após rolar 300px
- Scroll suave ao clicar
- Animação de entrada/saída

### 5. Animação de Cards
- **Transições suaves**: Todas as animações dos cards com duração de 0.8s para máxima suavidade
- **Efeito hover completo**: Transform, box-shadow, border-color, título, texto, ícones e badges animados
- **Efeito de entrada**: Animação suave ao fazer scroll usando Intersection Observer
- **Expansão em touch**: Cards expandem ao toque em dispositivos móveis
- **Sincronização**: Todos os elementos do card animam de forma coordenada

### 6. Inicialização de Componentes Bootstrap
- Tooltips nos links sociais
- Carousel automático com intervalo de 3 segundos

### 7. Animações Interativas
- **Logo**: Rotação de 90° do ícone de chip ao hover
- **Links sociais**: Animação pulse ao passar o mouse
- **Cards de formação**: Elevação, mudança de cor e escala dos elementos (0.8s)
- **Cards de projetos**: Elevação e rotação 360° do ícone (0.5s)
- **Botão scroll to top**: Fade in/out e elevação ao hover
- **Transições suaves**: Aplicadas em todos os elementos interativos

## 🎯 Componentes Bootstrap Utilizados

1. **Navbar**: Menu de navegação responsivo com toggle para mobile
2. **Carousel**: Apresentação de imagens com transição automática
3. **Cards**: Exibição de formação, interesses e projetos
4. **Grid System**: Layout responsivo com `row` e `col-*`
5. **Buttons**: Botões estilizados no formulário e projetos
6. **Forms**: Formulário de contato com validação
7. **Tooltips**: Dicas visuais nos links sociais
8. **Collapse**: Utilizado para controle do menu mobile

## 🎨 Design e Identidade Visual

### Logo Personalizada
- **Design**: Iniciais "O G" + ícone de chip/processador (Bootstrap Icons)
- **Tipografia**: Fonte Montserrat Light (300) para elegância e modernidade
- **Interatividade**: Ícone rotaciona 90° ao hover com transição suave
- **Cores dinâmicas**: Nome muda para accent color ao hover
- **Responsiva**: Adapta-se perfeitamente aos temas claro e escuro

### Formulário de Contato Aprimorado
- **Estilização consistente**: Todos os campos com border-radius de 8px e padding uniforme
- **Placeholder dinâmico**: Cor cinza com opacidade 0.6, muda ao focar
- **Select inteligente**: Texto placeholder em cinza, muda para cor normal quando selecionado
- **Validação visual**: Estados `:valid`, `:invalid` e `:focus` com feedback de cor e box-shadow
- **Tema adaptativo**: Cores e bordas ajustam-se automaticamente ao tema claro/escuro
- **Acessibilidade**: Labels claros, ícones descritivos e foco visível

## 📐 Responsividade

O site é totalmente responsivo e se adapta a diferentes tamanhos de tela:

- **Desktop** (>768px): Layout em múltiplas colunas
- **Tablet** (768px): Layout intermediário
- **Mobile** (<768px): Layout em coluna única

### Media Queries Personalizadas
- Ajuste de tamanho do carousel em mobile
- Reorganização da seção "Sobre" em mobile
- Redimensionamento de cards e imagens
- Ajuste de tamanhos de fonte
- **Scroll-padding ajustado para mobile**: 280px (vs 80px no desktop) para compensar a navbar e garantir visualização completa dos títulos das seções

## 🌓 Tema Claro/Escuro

O site detecta automaticamente a preferência de tema do sistema operacional do usuário através de `@media (prefers-color-scheme: dark)` e ajusta:

- **Variáveis CSS**: Sistema completo de variáveis para cores (--bg, --text, --accent, etc.)
- **Cores de fundo e texto**: Inversão completa para conforto visual
- **Bordas e sombras**: Ajustadas para cada tema
- **Logo do IFES**: Alternância automática entre versões clara/escura
- **Componentes do formulário**: Inputs, selects e checkboxes adaptados
- **Cards**: Background e bordas ajustados para melhor contraste
- **Navbar**: Borda inferior e ícone do toggler invertidos no tema escuro

## 📝 Formulário de Contato

O formulário inclui:

- **Campo Select**: Seleção de assunto (obrigatório)
  - Oportunidade de Trabalho
  - Projeto/Parceria
  - Dúvida/Informação
  - Outro
- **Campo de Nome**: Input text (obrigatório)
- **Campo de E-mail**: Input email com validação (obrigatório)
- **Campo de Mensagem**: Textarea (obrigatório)
- **Checkbox de Confirmação**: Autorização de contato (obrigatório)
- **Botão de Envio**: Com ícone e estilo Bootstrap

## 🔗 Links Externos

- **Currículo Lattes**: http://lattes.cnpq.br/0938454829765420
- **GitHub**: https://github.com/oberdangom35
- **Dashboard do Projeto**: http://ocgomes.ddns.net:3000
- **IFES Campus Alegre**: https://alegre.ifes.edu.br/

## 🚀 Como Executar o Projeto

### Opção 1: Clonar do GitHub
```bash
git clone https://github.com/oberdangom35/Site-Portfolio.git
cd Site-Portfolio
```
Abra o arquivo `index.html` em um navegador moderno.

### Opção 2: Acessar Online
Acesse: **https://oberdangom35.github.io/Site-Portfolio/** (se GitHub Pages estiver habilitado)

### Opção 3: Download Direto
1. Faça o download do repositório
2. Extraia o arquivo .zip
3. Abra o arquivo `index.html` em um navegador moderno
4. Navegue pelas seções usando o menu superior
5. Teste o formulário de contato

**Navegadores Recomendados:**
- Google Chrome (versão 90+)
- Mozilla Firefox (versão 88+)
- Microsoft Edge (versão 90+)
- Safari (versão 14+)

## ✅ Checklist de Requisitos Atendidos

- [x] Tema definido: Portfólio Pessoal
- [x] HTML + CSS + JavaScript + Bootstrap 5
- [x] Mínimo de 3 seções (5 seções implementadas)
- [x] Formulário completo com validação
- [x] Grid system do Bootstrap utilizado
- [x] Mínimo de 2 componentes Bootstrap (8 componentes utilizados)
- [x] CSS personalizado para ajustes visuais
- [x] Mínimo de 3 funcionalidades JavaScript (7 funcionalidades implementadas)
- [x] Responsividade testada em desktop e mobile
- [x] Tags semânticas HTML5
- [x] README completo
- [x] Logo personalizada com tipografia customizada (Montserrat)
- [x] Menu mobile com fechamento automático ao clicar
- [x] Scroll-padding otimizado para mobile (280px vs 80px desktop)
- [x] Animações suaves nos cards (0.8s) para melhor UX
- [x] Sistema completo de variáveis CSS para temas
- [x] Footer com shadow invertida (sobe) para coerência visual
- [x] Código CSS limpo e bem organizado (817 linhas)

## 👨‍💻 Autor

**Oberdan Covre Gomes**  
Matrícula: 20252EADS0249  
Curso: Tecnologia em Análise e Desenvolvimento de Sistemas  
Instituição: IFES - Campus Alegre

---

**Projeto desenvolvido para a disciplina de Desenvolvimento Front-End I**  
**Ano: 2025**
