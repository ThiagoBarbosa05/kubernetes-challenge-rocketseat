[NESTJS]: https://img.shields.io/badge/nestjs-%23E0234E.svg?style=for-the-badge&logo=nestjs&logoColor=white
[KUBERNETES]: https://img.shields.io/badge/kubernetes-%23326ce5.svg?style=for-the-badge&logo=kubernetes&logoColor=white
[DOCKER]: https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white
[POSTGRES]: https://img.shields.io/badge/postgresql-4169e1?style=for-the-badge&logo=postgresql&logoColor=white
[TYPESCRIPT]: https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white

<h1 align="center" style="font-weight: bold;">Kubernetes container orchestration💻</h1>

![DOCKER][DOCKER]
![KUBERNETES][KUBERNETES]
![NESTJS][NESTJS]
![TYPESCRIPT][TYPESCRIPT]
![Postgresql][POSTGRES]

<p align="center">
<a href="#features">Features</a> •
 <a href="#started">Getting Started</a> • 
 <a href="#docs">Documentation</a> •
 <a href="#license">License</a> •
 <a href="#collaborators">Collaborators</a> •
 <a href="#contribute">Contribute</a>
</p>

<p align="center">
  <b>A simple container orchestration project using Kubernetes, managing an API for creating and listing tasks and a Postgresql database for data persistence.</b>
  <br />
</p>

<h2 id="features">⚙️ Features</h2>

- Kubernetes Cluster configuration
- Creation of deployments
- Services configuration to connect the api to the database
- Creation of Storage Class, Persistent Volume (PV) and a Persistent Volume Claim (PVC) to persist database data
- configuration of environment variables using Config Map and secrets for the api and database.
- Configuring Autoscaling with Horizontal Pod Autoscaler (HPA).
- Configuring metrics server to collect metrics from cluster pods.

<h2 id="started">🚀 Getting started</h2>

<h3>Prerequisites</h3>

To run this application on your local machine, you will need to meet the following requirements

- have docker [Docker](https://docs.docker.com/engine/install) installed on your machine
- have [Kubernetes](https://kubernetes.io/pt-br/docs/setup/) and [kind](https://kind.sigs.k8s.io/docs/user/quick-start/#installation) installed on your machine to manage containers

After fulfilling all the requirements, follow the steps below to run the application.

Clone the project

```bash
  git clone https://github.com/ThiagoBarbosa05/kubernetes-challenge-rocketseat.git
```

Enter the project directory

```bash
  cd kubernetes-challenge-rocketseat
```

Create the cluster in Kubernetes

```bash
  kind create cluster --config k8s/kind.yaml --name=desafio-cluster
```

Create the namespaces

```bash
  kubectl apply -f k8s/namespaces.yaml
```

Create data persistence

```bash
  kubectl apply -f k8s/storageclass.yaml
  kubectl apply -f k8s/pv.yaml
  kubectl apply -f k8s/pvc-db.yaml
```

Create services

```bash
  kubectl apply -f k8s/service-api.yaml
  kubectl apply -f k8s/node-port-svc.yaml
  kubectl apply -f k8s/service-db.yaml
```

After creating the services, the api will be running at the following address `http://localhost:30007`, if it doesn't work you can try `http://<IP-DO-NODE>:30007`

Configure environment variables and secrets

```bash
  kubectl apply -f k8s/db-credentials.yaml
  kubectl apply -f k8s/configmap-api.yaml
```

Create the api and database deployment

```bash
  kubectl apply -f k8s/deployment-api.yaml
  kubectl apply -f k8s/deployment-db.yaml
```

Enable the Horizontal Pod Autoscaler (HPA) and metrics server

```bash
  kubectl apply -f k8s/hpa.yaml
  kubectl apply -f metrics/metrics-server.yaml
```

<h2 id="docs"> 📖 Documentation </h2>

Here you can list the main routes of your API, and what are their expected request bodies.
​
| route | description  
|----------------------|-----------------------------------------------------
| <kbd>GET /</kbd> | retrieves all tasks [response details](#get-tasks-detail)
| <kbd>POST /create/task</kbd> | create a new task [request details](#post-task-detail)

<h3 id="get-tasks-detail">GET /</h3>

**RESPONSE**

```json
[
  {
    "id": "358784d5-ff2e-4f65-bede-addb436af5c4",
    "title": "task example",
    "description": "Task description example",
    "isCompleted": false,
    "createdAt": "2025-01-20T21:45:17.952Z",
    "updatedAt": "2025-01-20T21:45:17.952Z"
  }
]
```

<h3 id="post-task-detail">POST /create/task</h3>

**REQUEST**

```json
{
  "title": "task title",
  "description": "task description"
}
```

**RESPONSE**

```json
{
  {
    "id": "358784d5-ff2e-4f65-bede-addb436af5c4",
    "title": "task title",
    "description": "Task description",
    "isCompleted": false,
    "createdAt": "2025-01-20T21:45:17.952Z",
    "updatedAt": "2025-01-20T21:45:17.952Z"
  }
}
```

<h2 id="license">📃 License </h2>

This project is under <a href="https://github.com/ThiagoBarbosa05/kubernetes-challenge-rocketseat.git/main/LICENSE">MIT</a> license

<h2 id="collaborators"> 🤝 Collaborators</h2>

<table>
  <tr>
    <td align="center">
      <a href="#">
        <img src="https://avatars.githubusercontent.com/u/61393836?v=4" width="100px;" alt="Foto doe Thiago Barbosa"/><br>
        <sub>
          <b>Thiago Barbosa</b>
        </sub>
      </a>
    </td>
  </tr>
</table>

<h2 id="contribute">📫 Contribute</h2>

1. `git clone hhttps://github.com/ThiagoBarbosa05/kubernetes-challenge-rocketseat.git`
2. `git checkout -b feature/NAME`
3. Follow commit patterns
4. Open a Pull Request explaining the problem solved or feature made, if exists, append screenshot of visual modifications and wait for the review!

<h3>Documentations that might help</h3>

[📝 How to create a Pull Request](https://www.atlassian.com/br/git/tutorials/making-a-pull-request)

[💾 Commit pattern](https://gist.github.com/joshbuchea/6f47e86d2510bce28f8e7f42ae84c716)
