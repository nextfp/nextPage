# Node.js 24 LTS (Debian 12 Bookworm) - bash と基本ツール完備
FROM node:24-bookworm

# 開発に必要なツールを一括インストール
RUN apt-get update && apt-get install -y \
    git \
    gh \
    build-essential \
    python3 \ 
    curl \
    && npm install -g vercel@latest \
    && apt-get clean && rm -rf /var/lib/apt/lists/*

# 非rootユーザーで実行（VS Code DevContainer 標準）
USER node
WORKDIR /home/node/app