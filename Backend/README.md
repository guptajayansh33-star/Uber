# API Documentation

## Endpoint: `/user/register`

### Description
This endpoint is used to register a new user. It validates the input data, hashes the password, and creates a new user in the database. Upon successful registration, it returns a JSON Web Token (JWT) and the user details.

### Method
`POST`

### Request Body
The request body should be in JSON format and include the following fields:

```json
{
  "fullname": {
    "firstname": "string (required, min 3 characters)",
    "lastname": "string (optional, min 3 characters)"
  },
  "email": "string (required, valid email format)",
  "password": "string (required, min 6 characters)"
}
```

### Validation Rules
- `email`: Must be a valid email address.
- `fullname.firstname`: Must be at least 3 characters long.
- `password`: Must be at least 6 characters long.

### Responses

#### Success Response
- **Status Code**: `201 Created`
- **Body**:
  ```json
  {
    "token": "string (JWT token)",
    "user": {
      "_id": "string",
      "fullname": {
        "firstname": "string",
        "lastname": "string"
      },
      "email": "string"
    }
  }
  ```

#### Error Responses
- **Status Code**: `400 Bad Request`
  - **Reason**: Validation errors in the input data.
  - **Body**:
    ```json
    {
      "errors": [
        {
          "msg": "string",
          "param": "string",
          "location": "string"
        }
      ]
    }
    ```

- **Status Code**: `500 Internal Server Error`
  - **Reason**: Unexpected server error.
  - **Body**:
    ```json
    {
      "error": "string"
    }
    ```

## Endpoint: `/user/login`

### Description
This endpoint is used to authenticate a user. It validates the input data, checks the credentials, and returns a JSON Web Token (JWT) along with the user details upon successful authentication.

### Method
`POST`

### Request Body
The request body should be in JSON format and include the following fields:

```json
{
  "email": "string (required, valid email format)",
  "password": "string (required, min 6 characters)"
}
```

### Validation Rules
- `email`: Must be a valid email address.
- `password`: Must be at least 6 characters long.

### Responses

#### Success Response
- **Status Code**: `200 OK`
- **Body**:
  ```json
  {
    "token": "string (JWT token)",
    "user": {
      "_id": "string",
      "fullname": {
        "firstname": "string",
        "lastname": "string"
      },
      "email": "string"
    }
  }
  ```

#### Error Responses
- **Status Code**: `400 Bad Request`
  - **Reason**: Validation errors in the input data.
  - **Body**:
    ```json
    {
      "errors": [
        {
          "msg": "string",
          "param": "string",
          "location": "string"
        }
      ]
    }
    ```

- **Status Code**: `401 Unauthorized`
  - **Reason**: Invalid email or password.
  - **Body**:
    ```json
    {
      "message": "Invalid email or password"
    }
    ```

- **Status Code**: `500 Internal Server Error`
  - **Reason**: Unexpected server error.
  - **Body**:
    ```json
    {
      "error": "string"
    }
    ```

## Endpoint: `/user/profile`

### Description
This endpoint retrieves the authenticated user's profile information. It requires a valid JWT token for authentication.

### Method
`GET`

### Authentication
- **Required**: Yes
- **Type**: JWT Token (in Authorization header or cookie)

### Request Body
No request body required.

### Responses

#### Success Response
- **Status Code**: `200 OK`
- **Body**:
  ```json
  {
    "_id": "string",
    "fullname": {
      "firstname": "string",
      "lastname": "string"
    },
    "email": "string"
  }
  ```

#### Error Responses
- **Status Code**: `401 Unauthorized`
  - **Reason**: Missing or invalid authentication token.
  - **Body**:
    ```json
    {
      "message": "Unauthorized"
    }
    ```

- **Status Code**: `500 Internal Server Error`
  - **Reason**: Unexpected server error.
  - **Body**:
    ```json
    {
      "error": "string"
    }
    ```

## Endpoint: `/user/logout`

### Description
This endpoint logs out the authenticated user by clearing the session cookie and blacklisting the JWT token to prevent further use.

### Method
`GET`

### Authentication
- **Required**: Yes
- **Type**: JWT Token (in Authorization header or cookie)

### Request Body
No request body required.

### Responses

#### Success Response
- **Status Code**: `200 OK`
- **Body**:
  ```json
  {
    "message": "Logged out successfully"
  }
  ```

#### Error Responses
- **Status Code**: `401 Unauthorized`
  - **Reason**: Missing or invalid authentication token.
  - **Body**:
    ```json
    {
      "message": "Unauthorized"
    }
    ```

- **Status Code**: `500 Internal Server Error`
  - **Reason**: Unexpected server error.
  - **Body**:
    ```json
    {
      "error": "string"
    }
    ```

## Endpoint: `/captain/register`

### Description
This endpoint is used to register a new captain. It validates the input data, hashes the password, and creates a new captain account in the database along with vehicle information. Upon successful registration, it returns a JSON Web Token (JWT) and the captain details.

### Method
`POST`

### Request Body
The request body should be in JSON format and include the following fields:

```json
{
  "fullname": {
    "firstname": "string (required, min 3 characters)",
    "lastname": "string (optional, min 3 characters)"
  },
  "email": "string (required, valid email format)",
  "password": "string (required, min 6 characters)",
  "vehicle": {
    "color": "string (required, min 3 characters)",
    "numberPlate": "string (required, min 3 characters)",
    "capacity": "integer (required, min 1)",
    "vehicleType": "string (required, must be 'car', 'bike', or 'auto')"
  }
}
```

### Validation Rules
- `email`: Must be a valid email address.
- `fullname.firstname`: Must be at least 3 characters long.
- `password`: Must be at least 6 characters long.
- `vehicle.color`: Must be at least 3 characters long.
- `vehicle.numberPlate`: Must be at least 3 characters long.
- `vehicle.capacity`: Must be an integer with a minimum value of 1.
- `vehicle.vehicleType`: Must be one of: `car`, `bike`, or `auto`.

### Responses

#### Success Response
- **Status Code**: `201 Created`
- **Body**:
  ```json
  {
    "token": "string (JWT token)",
    "captain": {
      "_id": "string",
      "fullname": {
        "firstname": "string",
        "lastname": "string"
      },
      "email": "string",
      "vehicle": {
        "color": "string",
        "numberPlate": "string",
        "capacity": "integer",
        "vehicleType": "string"
      }
    }
  }
  ```

#### Error Responses
- **Status Code**: `400 Bad Request`
  - **Reason**: Validation errors in the input data.
  - **Body**:
    ```json
    {
      "errors": [
        {
          "msg": "string",
          "param": "string",
          "location": "string"
        }
      ]
    }
    ```

- **Status Code**: `500 Internal Server Error`
  - **Reason**: Unexpected server error.
  - **Body**:
    ```json
    {
      "error": "string"
    }
    ```
