from flask import Flask, render_template, request, redirect, url_for, flash
import smtplib
from email.message import EmailMessage#
from dotenv import load_dotenv
import os

load_dotenv()

app = Flask(__name__)
app.secret_key = "replace-this-with-a-random-secret-key"

@app.route("/")
def home():
    return render_template("index.html")

@app.route("/contact", methods=["GET", "POST"])
def contact():
    if request.method == "POST":
        name = request.form.get("name", "").strip()
        email = request.form.get("email", "").strip()
        message = request.form.get("message", "").strip()

        if not name or not email or not message:
            flash("Please fill in all fields.", "error")
            return redirect(url_for("contact"))

        # Email settings
        smtp_server = "smtp.gmail.com"
        smtp_port = 587
        sender_email = os.getenv("SENDER_EMAIL")
        sender_password = os.getenv("EMAIL_PASS")
        recipient_email = os.getenv("RECEPIENT_EMAIL")

        msg = EmailMessage()
        msg["Subject"] = f"New contact form message from {name}"
        msg["From"] = sender_email
        msg["To"] = recipient_email
        msg.set_content(
            f"Name: {name}\n"
            f"Email: {email}\n\n"
            f"Message:\n{message}"
        )

        try:
            with smtplib.SMTP(smtp_server, smtp_port) as smtp:
                smtp.starttls()
                smtp.login(sender_email, sender_password)
                smtp.send_message(msg)

            flash("Your message has been sent successfully!", "success")
            return redirect(url_for("contact"))
        except Exception as e:
            flash("Sorry, there was a problem sending your message.", "error")
            return redirect(url_for("contact"))

    return render_template("contact.html")

@app.route("/about")
def about():
    return render_template("about.html")

@app.route("/products")
def products():
    return render_template("products.html")

@app.route("/sofa-beds")
def sofa_beds():
    return render_template("sofa-beds.html")

@app.route("/product")
def product():
    return render_template("product.html")

@app.route("/privacy")
def privacy():
    return render_template("privacy.html")

@app.route("/corner-sofas")
def corner_sofas():
    return render_template("corner-sofas.html")

@app.route("/armchairs")
def armchairs():
    return render_template("armchairs.html")

@app.route("/terms_conditions")
def terms_conditions():
    return render_template("terms_conditions.html")



if __name__ == "__main__":
    app.run(host="0.0.0.0", port=int(os.environ.get("PORT", 5000)))