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
- **Cor Principal**: `#3b82f6` (Azul)
- **Cor de Fundo**: `#f5f5f5` (Cinza claro)
- **Cor de Fundo Secundária**: `#ffffff` (Branco)
- **Cor de Texto**: `#222222` (Preto)
- **Cor de Texto Secundária**: `#555555` (Cinza escuro)

### Tema Escuro
- **Cor Principal**: `#60a5fa` (Azul claro)
- **Cor de Fundo**: `#121212` (Preto)
- **Cor de Fundo Secundária**: `#1e1e1e` (Cinza escuro)
- **Cor de Texto**: `#e5e5e5` (Branco)
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

### 3. Botão "Voltar ao Topo"
- Aparece após rolar 300px
- Scroll suave ao clicar
- Animação de entrada/saída

### 4. Animação de Cards (Bonus)
- Efeito de entrada suave ao fazer scroll
- Expansão de cards em dispositivos touch
- Animação de hover nos cards de formação

### 5. Inicialização de Componentes Bootstrap
- Tooltips nos links sociais
- Carousel automático com intervalo de 3 segundos

### 6. Animações Interativas
- Animação pulse nos links sociais ao passar o mouse
- Transições suaves em todos os elementos interativos

## 🎯 Componentes Bootstrap Utilizados

1. **Navbar**: Menu de navegação responsivo com toggle para mobile
2. **Carousel**: Apresentação de imagens com transição automática
3. **Cards**: Exibição de formação, interesses e projetos
4. **Grid System**: Layout responsivo com `row` e `col-*`
5. **Buttons**: Botões estilizados no formulário e projetos
6. **Forms**: Formulário de contato com validação
7. **Tooltips**: Dicas visuais nos links sociais

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

## 🌓 Tema Claro/Escuro

O site detecta automaticamente a preferência de tema do sistema operacional do usuário através de `@media (prefers-color-scheme: dark)` e ajusta:

- Cores de fundo e texto
- Bordas e sombras
- Logo do IFES (versão clara/escura)
- Componentes do formulário

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

1. Faça o download ou clone o repositório
2. Extraia o arquivo .zip (se necessário)
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
- [x] Mínimo de 2 componentes Bootstrap (7 componentes utilizados)
- [x] CSS personalizado para ajustes visuais
- [x] Mínimo de 3 funcionalidades JavaScript (6 funcionalidades implementadas)
- [x] Responsividade testada em desktop e mobile
- [x] Tags semânticas HTML5
- [x] README completo

## 👨‍💻 Autor

**Oberdan Covre Gomes**  
Matrícula: 20252EADS0249  
Curso: Tecnologia em Análise e Desenvolvimento de Sistemas  
Instituição: IFES - Campus Alegre

---

**Projeto desenvolvido para a disciplina de Desenvolvimento Front-End I**  
**Ano: 2025**
