# Blockchain/Chainlink : Satellite Broadband Service Chain

## Inspiration

This project was inspired by the vision:

  * Providing satellite broadband connectivity to the underserved remote communities with cryptographic truth.

## What it does

It is a proof-of-concept for automating manual processes in the Satellite Broadband Service by replacing paper contracts with hybrid smart contracts across synergies from suppliers/vendors, finance, sales, logistics with assets tracking to both partners and end users.

It demonstrates the journey of solutions in both equipment and bandwidth on blockchain augmented by the use of the Chainlink oracle to connect to off-chain data feeds.

The Satellite Broadband Service Chain is the sequence of activities and processes involved in shipping equipment from suppliers/vendors to the broadband satellite operator. The satellite operator then package them together with broadband solutions to serve telecommunications operators, internet service providers, governments, other service providers and end users.

Moreover, this project in itself is a DeFi payment gateway for remote underserved communities. It also bridge the gap that is not provided by the existing banking infrastructure.

In summary, this project will benefit all stakeholders with the empowerment of cryptographic truth to ensure definitive truth in providing connectivity to the underserved communities by bridging the geographical boundaries thus aliviating the digital divide and leaving no one behind.

## Components
- Smart Contracts - Hardhat/Solidity (https://github.com/FidelChe/satellite-broadband-service-chain)
- Front-end - Moralis/React (https://github.com/FidelChe/satellite-broadband-service-chain-ui)
- External Adapter - Google Cloud (https://github.com/FidelChe/marine-traffic-external-adapter)
- Chainlink Node - Google Cloud (https://github.com/FidelChe/chainlink-gcp)

#### Problems in Existing System
---
- Shipment visibility
- Weather visibility
- Slow process and error prone paper contracts
- Delays in coordination
- Overdue invoices and payment issues
- Lack of payment gateways for underserved communities

#### What Blockchain and Chainlink are providing
---
- Accurate information across the entire chain at any point and at any location
- Instant access to real-time updates and alerts if issues are detected
- Instant access to real-time off-chain data feeds on price, weather and marine traffic
- Visibility of all handovers in the Service chain
- Traceability from source to destination of solutions i.e. both equipment and bandwidth.
- Seamless collaboration between all parties
- Reduce paper work and speed up processes with automation
- Avoid overdue invoices and payment issues
- Provision of a payment gateway

#### Roles
---
1. **Admin** - new users registrations, assign access rights according to their roles.
2. **Supplier** - Service equipment, create new batch for purchase order details from Operator.  
3. **Transporter** - responsible for shipping Service batches from Supplier to Operator, from Operator to Partner and from Partner to EndUser.
4. **Operator** - responsible for ordering equipment batches from Supplier, process requests for both equipment hand bandwidth from Partner, update equipment details, quantity, validate quality and invoicing Partner.
5. **Partner** - reponsible for both equipment and bandwidth distribution, installations, activations and revenue collection from EndUser. 
6. **EndUser** - reponsible for equipment safety, varification of equipment condition, validation of bandwidth quality and bandwidth subscription to Partner. 

#### Application Workflow Diagram
---
![](https://github.com/FidelChe/satellite-broadband-service-chain/blob/main/workflow/Workflow.png)

#### Tools and Technologies
---
- Alchemy
- Chainlink
- Google Cloud
- Hardhat
- Kovan test network 
- Metamask
- Moralis 
- Solidity 
- Web3JS

#### Prerequisites
---
- Nodejs v14.17.6
- Npm v7.24.0
- Yarn v1.22.5
- npx 7.24.0
- Solidity 0.7.3 or above
- Metamask

#### Dependencies
---
- hardhat-ethers ^2.0.2
- hardhat-waffle ^2.0.1
- chai ^4.3.4
- dotenv ^10.0.0
- ethereum-waffle ^3.4.0
- ethers 5.4.7
- hardhat 2.6.4
