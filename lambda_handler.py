from mangum import Mangum
from app import app

handler = Mangum(app, lifespan="off")
```

### File 2: `requirements.txt`
Create or update this file with:
```
Flask==3.0.0
mangum==0.17.0
