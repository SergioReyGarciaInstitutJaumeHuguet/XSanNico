# **Isla de las Tentaciones API**

¡Bienvenido a la API de **La Isla de las Tentaciones**! 🌴🔥  
Esta API permite gestionar los datos de las hogueras y participantes del famoso reality show. Es ideal para aplicaciones que necesiten manejar información relacionada con las hogueras, participantes, temporadas y más.

---

## **Características principales**

- **Gestión de hogueras**:
  - Crear, leer, actualizar y eliminar hogueras.
  - Información como nombre, ubicación, temporada y número de parejas.

- **Gestión de participantes**:
  - Crear, leer, actualizar y eliminar participantes.
  - Información como nombre, edad, género, rol y temporada.

- **Conexión con MongoDB**:
  - Los datos se almacenan en una base de datos MongoDB para un acceso rápido y eficiente.

- **Backend con Node.js y Express**:
  - Rutas RESTful para interactuar con los datos.
  - Controladores y capas de datos bien organizados.

- **Frontend Angular**:
  - Interfaz de usuario para gestionar hogueras y participantes.

---

## **Requisitos previos**

Antes de comenzar, asegúrate de tener instalado lo siguiente:

- **Node.js** (versión 16 o superior)
- **npm** (gestor de paquetes de Node.js)
- **MongoDB** (instancia local o en la nube)

---

## **Instalación**

1. **Clona el repositorio**:
   ```bash
   git clone https://github.com/tu-usuario/isla-tentaciones-api.git
   cd isla-tentaciones-api
   ```

2. **Configura las variables de entorno**:
   Crea un archivo `.env` en la carpeta isla-backend con el siguiente contenido:
   ```
   MONGO_URI=mongodb://localhost:27017/isla-tentaciones
   PORT=5000
   ```

3. **Instala las dependencias**:
   - Para el backend:
     ```bash
     cd isla-backend
     npm install
     ```
   - Para el frontend:
     ```bash
     cd ../isla-frontend
     npm install
     ```

4. **Inicia el servidor**:
   - Backend:
     ```bash
     cd isla-backend
     npm start
     ```
   - Frontend:
     ```bash
     cd ../isla-frontend
     ng serve
     ```

5. **Accede a la aplicación**:
   - Backend: `http://localhost:5000`
   - Frontend: `http://localhost:4200`

---

## **Rutas principales**

### **Hogueras**
| Método | Ruta               | Descripción                          |
|--------|--------------------|--------------------------------------|
| GET    | `/hogueras`        | Obtiene todas las hogueras           |
| GET    | `/hogueras/:id`    | Obtiene una hoguera por su ID        |
| POST   | `/hogueras`        | Crea una nueva hoguera               |
| PUT    | `/hogueras/:id`    | Actualiza una hoguera existente      |
| DELETE | `/hogueras/:id`    | Elimina una hoguera                  |

### **Participantes**
| Método | Ruta                   | Descripción                          |
|--------|------------------------|--------------------------------------|
| GET    | `/participantes`       | Obtiene todos los participantes      |
| GET    | `/participantes/:id`   | Obtiene un participante por su ID    |
| POST   | `/participantes`       | Crea un nuevo participante           |
| PUT    | `/participantes/:id`   | Actualiza un participante existente  |
| DELETE | `/participantes/:id`   | Elimina un participante              |

---

## **Estructura del proyecto**

```
isla-backend/
├── controllers/       # Controladores de las rutas
├── datalayers/        # Lógica de acceso a la base de datos
├── models/            # Modelos de datos (Mongoose)
├── routes/            # Definición de rutas
├── server.js          # Configuración principal del servidor
├── .env               # Variables de entorno
└── package.json       # Dependencias del backend

isla-frontend/
├── src/
│   ├── app/
│   │   ├── components/ # Componentes de Angular
│   │   ├── services/   # Servicios para consumir la API
│   └── index.html      # Punto de entrada del frontend
├── angular.json        # Configuración de Angular
└── package.json        # Dependencias del frontend
```

---

## **Tecnologías utilizadas**

### **Backend**
- **Node.js**: Entorno de ejecución para JavaScript.
- **Express**: Framework para construir la API REST.
- **MongoDB**: Base de datos NoSQL.
- **Mongoose**: ODM para MongoDB.

### **Frontend**
- **Angular**: Framework para construir la interfaz de usuario.
- **Bootstrap**: Estilos y diseño responsivo.

---

## **Contribuciones**

¡Las contribuciones son bienvenidas! Si deseas colaborar, sigue estos pasos:

1. Haz un fork del repositorio.
2. Crea una nueva rama:
   ```bash
   git checkout -b feature/nueva-funcionalidad
   ```
3. Realiza tus cambios y haz un commit:
   ```bash
   git commit -m "Agrega nueva funcionalidad"
   ```
4. Sube tus cambios:
   ```bash
   git push origin feature/nueva-funcionalidad
   ```
5. Abre un pull request.

---

## **Licencia**

Este proyecto está bajo la licencia MIT. Consulta el archivo `LICENSE` para más detalles.

---

## **Contacto**

Si tienes preguntas o sugerencias, no dudes en contactarme:

- **Email**: ---
- **GitHub**: [mrvictorck](https://github.com/mrvictorck)

¡Gracias por usar la API de La Isla de las Tentaciones! 🌴🔥