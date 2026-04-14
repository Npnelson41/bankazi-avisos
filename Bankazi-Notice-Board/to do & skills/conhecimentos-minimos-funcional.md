# 🎯 Conhecimentos Mínimos para Entregar Site Funcional
## Foco: Só o ESSENCIAL para fazer funcionar em 3 semanas

Este guia contém APENAS o que você precisa saber para testar, ajustar e hospedar o site. Sem enrolação, sem teoria desnecessária.

---

## 📊 REALIDADE

**Você NÃO precisa:**
❌ Ser programador expert
❌ Saber criar site do zero
❌ Entender tudo do código
❌ Fazer design do zero

**Você SÓ precisa:**
✅ Entender o básico do código que eu criei
✅ Saber testar funcionalidades
✅ Conseguir fazer pequenos ajustes
✅ Hospedar o site online

---

## 🟢 NÍVEL 1: SOBREVIVÊNCIA (Semana 1)    DONE✅
**Objetivo:** Conseguir abrir e testar o site

### 1. Como Abrir Arquivos HTML
**Tempo para aprender:** 10 minutos

**O que você precisa:**
- Computador
- Navegador (Chrome, Firefox)
- Editor de texto (VS Code - grátis)

**Como fazer:**
```
1. Baixar VS Code: code.visualstudio.com
2. Instalar
3. Abrir VS Code
4. File > Open > selecionar pasta do projeto
5. Clicar com botão direito no arquivo .html
6. "Open with Live Server" (instalar extensão Live Server)
```

**Alternativa simples:**
```
1. Ir na pasta do projeto
2. Duplo clique no arquivo .html
3. Abre no navegador
```

**Você aprendeu:** ✅ Abrir site no navegador   

---

### 2. Como Ver Erros (DevTools) DONE✅
**Tempo para aprender:** 20 minutos

**O que você precisa saber:**
- Apertar F12 = abre DevTools
- Aba "Console" = ver erros
- Vermelho = erro (ruim)
- Amarelo = aviso (pode ignorar alguns)

**Como usar:**
```
1. Abrir site no Chrome
2. Apertar F12
3. Clicar em "Console"
4. Recarregar página (Ctrl+R)
5. Ver se tem erros vermelhos
```

**Erros comuns e o que significam:**

```javascript
// ❌ Erro: "Uncaught ReferenceError: minhaFuncao is not defined"
// Significa: Função não existe ou nome está errado

// ❌ Erro: "Cannot read property 'textContent' of null"
// Significa: Tentou pegar elemento que não existe no HTML

// ❌ Erro: "404 Not Found: imagem.jpg"
// Significa: Arquivo não foi encontrado (caminho errado)
```

**Você aprendeu:** ✅ Ver e identificar erros

---

### 3. Como Testar Responsividade     DONE✅
**Tempo para aprender:** 15 minutos

**Como fazer:**
```
1. Abrir site no Chrome
2. F12 (DevTools)
3. Clicar no ícone de celular/tablet (Ctrl+Shift+M)
4. Escolher dispositivo no dropdown (iPhone, iPad, etc.)
5. Ver se site funciona bem
```

**O que verificar:**
- [ ] Menu aparece? (hamburguer em mobile)
- [ ] Textos são legíveis?
- [ ] Imagens não ultrapassam tela?
- [ ] Botões são grandes o suficiente?

**Você aprendeu:** ✅ Testar em diferentes tamanhos de tela

---

## 🟡 NÍVEL 2: AJUSTES BÁSICOS (Semana 1-2)  DONE✅
**Objetivo:** Fazer pequenas mudanças no código

### 4. Trocar Textos
**Tempo para aprender:** 30 minutos

**Localização no código:**

**Textos do HTML:**
```html
<!-- ANTES -->
<h1>BANKAZI</h1>
<p>Colégio de Excelência</p>

<!-- DEPOIS (seu texto) -->
<h1>NOME DO SEU COLÉGIO</h1>
<p>Seu slogan aqui</p>
```

**Como fazer:**
1. Abrir arquivo .html no VS Code
2. Ctrl+F para buscar texto que quer mudar
3. Trocar texto
4. Salvar (Ctrl+S)
5. Recarregar navegador (F5)

**Textos do JavaScript (notícias):**
```javascript
// Procurar por: newsData = [
const newsData = [
    {
        id: 1,
        title: 'Título da Notícia',  // ← TROCAR AQUI
        excerpt: 'Resumo...',         // ← E AQUI
        date: '18 de Dezembro, 2025'  // ← E AQUI
    }
];
```

**Você aprendeu:** ✅ Editar textos do site

---

### 5. Mudar Cores  DONE✅
**Tempo para aprender:** 1 hora

**Localização no código:**
```css
/* Procurar por: :root { */
:root {
    --primary: #0f4c81;      /* Cor principal (azul) */
    --secondary: #ff6b35;    /* Cor secundária (laranja) */
    --accent: #004e89;       /* Cor de destaque */
}
```

**Como mudar:**
1. Buscar ferramenta de cores: google "color picker"
2. Escolher cor que quer
3. Copiar código (ex: #FF5733)
4. Trocar no código
5. Salvar e ver resultado

**Dica:** Trocar só as 3 cores principais já muda visual todo!

**Você aprendeu:** ✅ Personalizar cores

---

### 6. Trocar Número de Estatísticas  DONE✅
**Tempo para aprender:** 20 minutos

**Localização:**
```html
<!-- Procurar por: data-target -->
<div class="stat-number" data-target="1250">0</div>
<!-- Trocar 1250 para número que você quiser -->

<div class="stat-number" data-target="2000">0</div>
<!-- Agora vai contar até 2000 -->
```

**O que é data-target:**
- É o número final que quer mostrar
- Começa em 0 e conta até esse número
- Pode ser qualquer número

**Você aprendeu:** ✅ Ajustar dados do site

---

## 🔴 NÍVEL 3: FUNCIONALIDADES (Semana 2)
**Objetivo:** Entender como funcionalidades principais funcionam

### 7. Entender Sistema de Busca
**Tempo para aprender:** 2 horas

**Como funciona (conceito):**
```
1. Usuário digita "matrícula"
2. JavaScript pega o texto digitado
3. Procura palavra em TODAS as notícias
4. Esconde notícias que NÃO têm a palavra
5. Mostra só as que TÊM a palavra
```

**Código simplificado:**
```javascript
// Quando usuário digita alguma coisa
searchInput.addEventListener('input', (e) => {
    // Pega o que foi digitado
    const textoBuscado = e.target.value.toLowerCase();
    
    // Para cada notícia
    newsCards.forEach(card => {
        // Pega o título da notícia
        const titulo = card.querySelector('.news-title').textContent.toLowerCase();
        
        // Se título contém o texto buscado
        if (titulo.includes(textoBuscado)) {
            card.style.display = 'block';  // Mostra
        } else {
            card.style.display = 'none';   // Esconde
        }
    });
});
```

**Você NÃO precisa memorizar o código!**
**Você SÓ precisa entender o CONCEITO**

**Para testar se funciona:**
1. Abrir site
2. Digitar na busca
3. Ver se filtra
4. Se não funciona, verificar console (F12)

**Você aprendeu:** ✅ Como busca funciona (conceito)

---

### 8. Entender Filtros de Categoria
**Tempo para aprender:** 1 hora

**Como funciona (conceito):**
```
1. Usuário clica "Avisos"
2. JavaScript pega todas as notícias
3. Filtra só as que têm category: 'aviso'
4. Esconde as outras
```

**Lógica:**
```javascript
// Se clicou em "Avisos"
if (botaoClicado === 'avisos') {
    // Para cada notícia
    notícias.forEach(noticia => {
        // Se é aviso, mostra
        if (noticia.category === 'aviso') {
            mostrar();
        } else {
            esconder();
        }
    });
}
```

**Para testar:**
1. Clicar em cada categoria
2. Contar quantas aparecem
3. Ver se são da categoria certa

**Você aprendeu:** ✅ Como filtros funcionam (conceito)

---

### 9. Entender Slider Automático
**Tempo para aprender:** 1 hora

**Como funciona (conceito):**
```
1. Mostrar slide 1
2. Esperar 5 segundos
3. Esconder slide 1
4. Mostrar slide 2
5. Repetir infinitamente
```

**Lógica:**
```javascript
// A cada 5 segundos (5000 milissegundos)
setInterval(() => {
    // Esconde slide atual
    slideAtual.classList.remove('active');
    
    // Próximo slide
    proximoSlide();
    
    // Mostra próximo
    proximoSlide.classList.add('active');
}, 5000);
```

**Para testar:**
1. Abrir site
2. Esperar 5 segundos
3. Ver se troca automaticamente
4. Clicar nos dots
5. Ver se vai para slide correto

**Você aprendeu:** ✅ Como slider funciona (conceito)

---

## 🌐 NÍVEL 4: HOSPEDAGEM (Semana 2)
**Objetivo:** Colocar site no ar

### 10. Hospedar no Netlify (MAIS FÁCIL)
**Tempo para aprender:** 30 minutos

**Passo a passo COMPLETO:**

**1. Preparar arquivos:**
```
Criar uma pasta com TUDO dentro:
📁 bankazi-site/
  ├── index.html (seu arquivo)
  ├── images/ (se tiver imagens)
  └── (outros arquivos)

IMPORTANTE: O arquivo principal DEVE se chamar "index.html"
```

**2. Criar conta Netlify:**
```
1. Ir em: netlify.com
2. Clicar "Sign up"
3. Escolher "Sign up with email" ou GitHub
4. Confirmar e-mail
5. Login
```

**3. Fazer deploy:**
```
1. Na tela inicial, ver área "Want to deploy a new site?"
2. Arrastar pasta do projeto para área pontilhada
3. Aguardar upload (30 segundos - 2 minutos)
4. PRONTO! Site no ar!
```

**4. Você receberá URL tipo:**
```
https://random-name-123456.netlify.app
```

**5. (Opcional) Mudar nome:**
```
1. Site settings
2. Change site name
3. Colocar: bankazi-portal
4. Novo URL: https://bankazi-portal.netlify.app
```

**Para ATUALIZAR site depois:**
```
1. Fazer mudanças nos arquivos locais
2. Netlify > Deploys
3. Arrastar pasta novamente
4. Automaticamente substitui
```

**Você aprendeu:** ✅ Hospedar site online GRÁTIS

---

### 11. Verificar se Site Está Funcionando Online
**Tempo para aprender:** 20 minutos

**Checklist:**
- [ ] Site abre no navegador
- [ ] CSS está carregando (está bonito)
- [ ] JavaScript está funcionando (testar busca, slider)
- [ ] Não tem erros no console (F12)
- [ ] URL tem cadeado verde (HTTPS)

**Como testar:**
1. Abrir URL do Netlify
2. Testar TODAS as funcionalidades
3. Testar em celular também
4. Pedir para amigo abrir e testar

**Se algo não funciona:**
```
1. F12 > Console
2. Ver erro
3. Geralmente é caminho de arquivo errado
4. Ajustar e fazer upload novamente
```

**Você aprendeu:** ✅ Verificar site em produção

---

## 📱 NÍVEL 5: TESTES RÁPIDOS (Semana 2-3)
**Objetivo:** Garantir que tudo funciona

### 12. Teste Rápido de Funcionalidades
**Tempo:** 30 minutos

**Checklist para testar em 30 minutos:**

```
[ ] Abrir site
[ ] Menu funciona? (clicar em cada item)
[ ] Slider muda sozinho? (esperar 5 segundos)
[ ] Busca funciona? (digitar algo)
[ ] Filtros funcionam? (clicar em cada categoria)
[ ] Formulário newsletter aceita e-mail? (testar)
[ ] Botão voltar ao topo aparece ao rolar?
[ ] Estatísticas animam ao rolar até elas?
[ ] Hover nos cards funciona?
[ ] Abrir no celular (ou DevTools)
[ ] Tudo funciona no mobile?
```

**Anote o que NÃO funciona:**
```
❌ Slider não muda automaticamente
❌ Busca não filtra
❌ Menu mobile não abre
```

**Priorize consertar o que é mais visível!**

**Você aprendeu:** ✅ Testar sistematicamente

---

### 13. Teste de Performance Rápido
**Tempo:** 15 minutos

**Usar PageSpeed Insights:**
```
1. Ir em: pagespeed.web.dev
2. Colar URL do seu site
3. Clicar "Analyze"
4. Esperar resultado (1-2 minutos)
```

**Interpretar resultado:**
```
🟢 90-100 = Excelente
🟡 50-89 = Bom (aceitável)
🔴 0-49 = Ruim (precisa melhorar)
```

**Se estiver ruim (<50):**
```
Causas comuns:
1. Imagens muito grandes
   → Solução: Comprimir no TinyPNG

2. Muitos scripts
   → Solução: Remover scripts desnecessários

3. Código não minificado
   → Solução: Usar minificador online
```

**Você aprendeu:** ✅ Verificar velocidade do site

---

## 🎓 RESUMO: O MÍNIMO QUE VOCÊ PRECISA SABER

### Para entregar site FUNCIONAL em 3 semanas:

**Semana 1: Entendimento**
- [ ] Saber abrir HTML no navegador (10 min)
- [ ] Saber ver erros no console (20 min)
- [ ] Saber testar responsividade (15 min)
- [ ] Conseguir trocar textos (30 min)
- [ ] Conseguir mudar cores (1h)

**TOTAL SEMANA 1: ~5 horas**

---

**Semana 2: Testes e Deploy**
- [ ] Entender como busca funciona (conceito - 1h)
- [ ] Entender como filtros funcionam (conceito - 1h)
- [ ] Entender como slider funciona (conceito - 1h)
- [ ] Hospedar no Netlify (30 min)
- [ ] Testar site online (2h)

**TOTAL SEMANA 2: ~8 horas**

---

**Semana 3: Polimento**
- [ ] Fazer todos os testes (3h)
- [ ] Corrigir bugs encontrados (3h)
- [ ] Preparar apresentação (2h)

**TOTAL SEMANA 3: ~8 horas**

---

**TOTAL GERAL: ~21 horas em 3 semanas**
**= 1 hora por dia + fim de semana**

---

## 📚 RECURSOS MÍNIMOS

### Tutoriais de 1 hora que resolvem tudo:

**HTML/CSS Básico (se nunca viu):**
- YouTube: "HTML & CSS Crash Course" (1 hora)
- Só assistir, não precisa fazer junto ainda

**JavaScript Básico (conceitos):**
- YouTube: "JavaScript for Beginners" (1 hora)
- Foco em entender variáveis, funções, eventos

**DevTools (essencial):**
- YouTube: "Chrome DevTools Tutorial" (30 min)
- Como ver erros e testar

**Netlify Deploy:**
- YouTube: "Deploy to Netlify" (15 min)
- Literalmente arrastar e soltar

**TOTAL: ~3 horas de vídeos**

---

## 🎯 PLANO DE 3 SEMANAS

### SEMANA 1: Familiarização

**Segunda (1h):**
- Instalar VS Code
- Abrir projeto
- Entender estrutura de pastas

**Terça (1h):**
- Testar todas as funcionalidades
- Anotar o que funciona

**Quarta (1h):**
- Assistir tutorial HTML/CSS (background)
- Fazer pequenas mudanças (cores)

**Quinta (1h):**
- Assistir tutorial JavaScript (conceitos)
- Entender código do slider

**Sexta (1.5h):**
- Testar responsividade
- Ver em diferentes tamanhos

**Sábado (2h):**
- Assistir DevTools tutorial
- Praticar ver erros

**Domingo (1h):**
- Revisar tudo
- Fazer anotações

---

### SEMANA 2: Deploy e Testes

**Segunda (1h):**
- Criar conta Netlify
- Fazer primeiro deploy

**Terça (1.5h):**
- Testar site online
- Anotar bugs

**Quarta (1.5h):**
- Corrigir bugs encontrados
- Re-deploy

**Quinta (1h):**
- Testar em celular real
- Pedir amigo testar

**Sexta (1.5h):**
- PageSpeed test
- Melhorar performance se necessário

**Sábado (2h):**
- Testes finais
- Checklist completo

**Domingo (1h):**
- Ajustes finais
- Garantir tudo funciona

---

### SEMANA 3: Apresentação

**Segunda (1h):**
- Tirar screenshots
- Preparar demo

**Terça (1h):**
- Escrever documentação simples
- Como atualizar notícias

**Quarta (1h):**
- Teste final completo
- Lista de possíveis perguntas

**Quinta (1h):**
- Preparar respostas
- Praticar apresentação

**Sexta (2h):**
- Última revisão
- Garantir 100% funcional

**Sábado:**
- Descansar!

**Domingo:**
- Revisar mentalmente

**Segunda:**
- APRESENTAÇÃO! 🎉

---

## 💪 MOTIVAÇÃO FINAL

**Você NÃO precisa:**
❌ Ser expert em programação
❌ Entender cada linha de código
❌ Criar tudo do zero
❌ Saber tudo de JavaScript

**Você SÓ precisa:**
✅ Testar o que já está pronto
✅ Fazer pequenos ajustes
✅ Hospedar online
✅ Apresentar com confiança

**O código JÁ ESTÁ PRONTO!**
**Você só precisa TESTAR e HOSPEDAR**

**Isso é TOTALMENTE possível em 3 semanas!**

**Mesmo se você:**
- Nunca programou antes
- Não sabe JavaScript
- Nunca hospedou site

**Por quê?**
- Código já funciona
- Netlify é arrastar e soltar
- Testes são checklist simples
- Você tem 3 semanas

**21 horas de dedicação = Site profissional online**

**Você consegue! 🚀**

---

## 🆘 SE TRAVAR

**Problema: "Não consigo abrir o arquivo"**
→ Solução: YouTube "how to open HTML file"

**Problema: "Netlify não aceita meu site"**
→ Solução: Arquivo principal DEVE se chamar index.html

**Problema: "Site não funciona online"**
→ Solução: F12 > Console > ver erro específico

**Problema: "Não entendo JavaScript"**
→ Solução: Você NÃO precisa! Só use o que já está pronto

**Problema: "Tenho medo de quebrar"**
→ Solução: Faça backup da pasta antes de mexer

**SEMPRE:**
1. Google o erro específico
2. YouTube "how to fix [seu problema]"
3. Stack Overflow
4. Peça ajuda em comunidades

**Você não está sozinho!** 💪
