import { http } from "./http";
import './websocket/client'

const port = 3000 

http.listen(port, () => console.log(`BACK-END Server is running on port ${port}`))