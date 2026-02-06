# Azure Web App Deployment using ARM & Azure DevOps

This project demonstrates a complete DevOps pipeline using:
- ARM Templates for infrastructure provisioning
- Azure DevOps YAML pipelines
- Azure Web App with deployment slots
- Staging → Production slot swap

## Architecture
- App Service Plan
- Azure Web App (Linux)
- Staging deployment slot
- CI/CD pipeline using Azure DevOps

## Tech Stack
- Azure ARM Templates
- Azure DevOps Pipelines
- Azure CLI
- Node.js

## Pipeline Flow
1. Provision infrastructure using ARM template
2. Deploy application to staging slot
3. Swap staging slot to production

## Folder Structure



#####################

step-1 Login to Azure

az login

step-2 Create a resource group

az group create \
  --name rg-arm-demo \
  --location "East US"

step-3 Deploy the ARM template

az deployment group create \
  --resource-group rg-arm-demo \
  --template-file azuredeploy.json \
  --parameters webAppName=myarmwebapp123
