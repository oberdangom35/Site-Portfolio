# 📚 Guia para Subir o Projeto no GitHub

## 🎯 Objetivo
Criar o repositório "Site-Portfólio" no GitHub e fazer o upload de todos os arquivos do projeto.

---

## 📋 Pré-requisitos

1. ✅ Git instalado no computador
2. ✅ Conta no GitHub (usuário: oberdangom35)
3. ✅ Git configurado com suas credenciais

### Verificar se o Git está instalado:
```bash
git --version
```

### Configurar Git (se ainda não configurou):
```bash
git config --global user.name "Oberdan Covre Gomes"
git config --global user.email "seu-email@exemplo.com"
```

---

## 🚀 Passo a Passo

### PASSO 1: Criar o Repositório no GitHub

1. Acesse: https://github.com/oberdangom35
2. Clique no botão **"New"** (ou ícone +) no canto superior direito
3. Preencha os dados:
   - **Repository name**: `Site-Portfólio`
   - **Description**: `Portfólio pessoal desenvolvido com HTML, CSS, JavaScript e Bootstrap 5 - Projeto Final de Desenvolvimento Front-End I`
   - **Visibilidade**: Public (recomendado) ou Private
   - **NÃO** marque "Add a README file" (já temos um)
   - **NÃO** adicione .gitignore (já criamos um)
   - **NÃO** escolha licença (pode adicionar depois se quiser)
4. Clique em **"Create repository"**

---

### PASSO 2: Inicializar o Git Local

Abra o terminal/PowerShell na pasta do projeto:

```bash
cd D:\ProjetosIA\Portfolio
```

Inicialize o repositório Git:

```bash
git init
```

---

### PASSO 3: Adicionar Todos os Arquivos

Adicione todos os arquivos ao staging:

```bash
git add .
```

Verifique os arquivos adicionados:

```bash
git status
```

---

### PASSO 4: Fazer o Primeiro Commit

Crie o commit inicial:

```bash
git commit -m "🎉 Commit inicial - Portfólio Pessoal completo"
```

Ou com mensagem mais detalhada:

```bash
git commit -m "🎉 Commit inicial - Portfólio Pessoal

- Projeto final de Desenvolvimento Front-End I
- HTML5 semântico com 5 seções
- CSS3 com tema claro/escuro automático
- JavaScript com 6 funcionalidades
- Bootstrap 5.3.2 com 7 componentes
- Formulário de contato com validação
- Totalmente responsivo
- Documentação completa"
```

---

### PASSO 5: Renomear Branch para Main

```bash
git branch -M main
```

---

### PASSO 6: Conectar ao Repositório Remoto

Adicione o repositório remoto (substitua pela URL do seu repositório):

```bash
git remote add origin https://github.com/oberdangom35/Site-Portfólio.git
```

Verifique se foi adicionado corretamente:

```bash
git remote -v
```

---

### PASSO 7: Fazer o Push para o GitHub

Envie os arquivos para o GitHub:

```bash
git push -u origin main
```

**Nota**: Você pode precisar fazer login no GitHub durante este processo.

---

## 🔐 Autenticação no GitHub

### Opção 1: Personal Access Token (Recomendado)

1. Acesse: https://github.com/settings/tokens
2. Clique em **"Generate new token"** > **"Generate new token (classic)"**
3. Dê um nome: `Site-Portfolio-Upload`
4. Marque o escopo: **repo** (acesso total aos repositórios)
5. Clique em **"Generate token"**
6. **COPIE O TOKEN** (você não verá novamente!)
7. Use o token como senha quando o Git pedir

### Opção 2: GitHub CLI

```bash
gh auth login
```

---

## ✅ Verificação

Após o push, verifique:

1. Acesse: https://github.com/oberdangom35/Site-Portfólio
2. Confirme que todos os arquivos estão lá
3. Verifique se o README.md está sendo exibido
4. Teste se as imagens estão carregando

---

## 📝 Comandos Resumidos (Copiar e Colar)

```bash
# 1. Navegar até a pasta do projeto
cd D:\ProjetosIA\Portfolio

# 2. Inicializar Git
git init

# 3. Adicionar todos os arquivos
git add .

# 4. Fazer commit
git commit -m "🎉 Commit inicial - Portfólio Pessoal completo"

# 5. Renomear branch para main
git branch -M main

# 6. Adicionar repositório remoto
git remote add origin https://github.com/oberdangom35/Site-Portfólio.git

# 7. Fazer push
git push -u origin main
```

---

## 🌐 Habilitar GitHub Pages (Opcional)

Para publicar o site online gratuitamente:

1. Vá em **Settings** do repositório
2. No menu lateral, clique em **Pages**
3. Em **Source**, selecione **main** branch
4. Clique em **Save**
5. Aguarde alguns minutos
6. Seu site estará disponível em: `https://oberdangom35.github.io/Site-Portfólio/`

---

## 🔄 Comandos Úteis para o Futuro

### Verificar status:
```bash
git status
```

### Ver histórico de commits:
```bash
git log --oneline
```

### Adicionar novos arquivos:
```bash
git add .
git commit -m "Descrição da alteração"
git push
```

### Atualizar repositório local:
```bash
git pull
```

### Ver branches:
```bash
git branch
```

---

## 📂 Estrutura que Será Enviada

```
Site-Portfólio/
├── .gitignore                    ✅
├── index.html                    ✅
├── README.md                     ✅
├── PLANEJAMENTO.md              ✅
├── CHECKLIST-FINAL.md           ✅
├── RESUMO-FINAL.md              ✅
├── GUIA-GIT.md                  ✅
├── css/
│   └── style.css                ✅
├── js/
│   └── scripts.js               ✅
└── img/
    ├── IMG_4140.JPG             ✅
    ├── IMG_4141.jpg             ✅
    ├── IMG_4142.JPG             ✅
    ├── img_4143.jpg             ✅
    ├── IFES-Alegre-white.png    ✅
    └── IFES-Alegre-dark.png     ✅
```

---

## ❓ Solução de Problemas

### Erro: "fatal: not a git repository"
```bash
git init
```

### Erro: "remote origin already exists"
```bash
git remote remove origin
git remote add origin https://github.com/oberdangom35/Site-Portfólio.git
```

### Erro: "failed to push some refs"
```bash
git pull origin main --allow-unrelated-histories
git push -u origin main
```

### Erro de autenticação
- Use Personal Access Token em vez de senha
- Ou configure SSH keys

---

## 📞 Suporte

- Documentação Git: https://git-scm.com/doc
- GitHub Docs: https://docs.github.com
- GitHub Support: https://support.github.com

---

**Boa sorte com o upload! 🚀**

*Após seguir este guia, seu projeto estará no GitHub e você poderá compartilhar o link com professores, recrutadores e colegas.*
