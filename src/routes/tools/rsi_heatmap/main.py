import os
from flask import Flask, send_file
from flask_cors import CORS
import io
import matplotlib.pyplot as plt

# Luo Flask-sovellus
app = Flask(__name__)

# Salli CORS (Cross-Origin Resource Sharing) pyynnöt tietyistä lähteistä
allowed_origins = [
    "http://localhost:5173",  # Paikallinen kehitysympäristö
    "https://cauco.up.railway.app"  # Railway-verkkotunnus
]
CORS(app, resources={r"/*": {"origins": allowed_origins}})

# Määritä portti, jota sovellus käyttää
port = int(os.environ.get("PORT", 5002))

# Tämä reitti tuottaa RSI Heatmap-kuvan ja palauttaa sen PNG-muodossa
@app.route('/heatmap')
def serve_heatmap():
    # ... Tähän tulee funktio plot_rsi_heatmap, joka tuottaa kuvan ...
    buf = io.BytesIO()
    plt.savefig(buf, format="png")
    buf.seek(0)
    return send_file(buf, mimetype='image/png')

# Käynnistä sovellus, jos tämä tiedosto ajetaan suoraan
if __name__ == "__main__":
    app.run(host='0.0.0.0', port=port)
