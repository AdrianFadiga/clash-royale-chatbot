# Usar a imagem oficial do Node.js 18.13.0 como base
FROM node:18.13.0

# Definir o diretório de trabalho no container
WORKDIR /usr/src/app

# Copiar ambos package.json E package-lock.json
COPY package*.json ./

# Instalar dependências
RUN npm install

# Copiar o resto do código da aplicação
COPY . .

# Gerar Prisma Client
RUN npx prisma generate

# Expor a porta em que a aplicação estará rodando
EXPOSE 7171

# Rodar a aplicação quando o container iniciar
CMD [ "npm", "run", "dev" ]