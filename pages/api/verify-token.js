
export default function handler(req, res) {
    const token = req.query.token;
    const remoteip = req.socket.remoteAddress;
    fetch(`https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RE_CAPTCHA_SECRET_KEY}&response=${token}&remoteip=${remoteip}`,
        {
            method: 'POST'
        }).then(r => r.json())
        .then(response => res.status(200).send(response))
        .catch(error => res.status(500).send(error))
}