SERVICE_NAME := frontend

DOCKER_COMPOSE_DEV := docker-compose.dev.yml
DOCKER_COMPOSE_PROD := docker-compose.prod.yml

PROJECT_DIR := ./front

.PHONY: help
help:
	@echo "🛠 Makefile universel pour le projet"
	@echo "Usage :"
	@echo "  🐣 make dev       -> lancer le service $(SERVICE_NAME) en dev Docker (hot reload)"
	@echo "  🚀 make prod      -> lancer le service $(SERVICE_NAME) en prod Docker"
	@echo "  🏠 make local     -> lancer le service $(SERVICE_NAME) localement sans Docker"
	@echo "  🧹 make stop      -> arrêter tous les conteneurs Docker"

# 🐣 Dev Docker
.PHONY: dev
dev:
	@echo "🐣 Lancement du service $(SERVICE_NAME) en dev Docker..."
	docker compose -f $(DOCKER_COMPOSE_DEV) up --build

# 🚀 Prod Docker
.PHONY: prod
prod:
	@echo "🚀 Lancement du service $(SERVICE_NAME) en prod Docker..."
	docker compose -f $(DOCKER_COMPOSE_PROD) up --build -d

# 🏠 Local
.PHONY: local
local:
	@echo "🏠 Lancement du service $(SERVICE_NAME) localement..."
	cd $(PROJECT_DIR) && npm install
	cd $(PROJECT_DIR) && npm run dev

# 🧹 Stop Docker
.PHONY: stop
stop:
	@echo "🧹 Arrêt des conteneurs Docker..."
	docker compose -f $(DOCKER_COMPOSE_DEV) down
	docker compose -f $(DOCKER_COMPOSE_PROD) down
