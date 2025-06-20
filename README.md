# Trabalho Final - Programação para Automação de Testes

Este repositório contém a implementação do **Trabalho de Conclusão** da disciplina de **Programação para Automação de Testes**, ministrada por **Samuel Lucas**.

## 📌 Descrição

Trabalho individual com o objetivo de implementar scripts que façam os testes fornecidos passarem. O arquivo de testes (`test/trabalho.test.js`) **não deve ser alterado**. A lógica deve ser implementada em um arquivo separado (`trabalho.js`), utilizando conceitos aprendidos ao longo da disciplina.

---

## 🚀 Instalação

Clone este repositório e instale as dependências:

```bash
git clone https://github.com/Kellyfiocchi/trabalho-pgats.git
cd trabalho-pgats
npm install
```

🧪 Executando os testes localmente
O projeto está configurado para usar o Mocha como framework de testes:

```bash
npm test
```

- O Mocha irá procurar por todos os arquivos em test/\*_/_.js.
- Se configurado, ele também gera relatórios JUnit em reports/junit/results.xml.

---

## 🚨 Integração Contínua (CI)

- Workflow: .github/workflows/01-manual-exec.yaml
- Gatilho: workflow_dispatch (disparo manual)

## 📂 Relatórios e Artefatos

- Após a execução, acesse Actions ➔ Execução Manual - Testes JS ➔ Run # ➔ Artifacts.
