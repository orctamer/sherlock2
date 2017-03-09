const Endpoint = require("../../core/Endpoint");

class PanelLogs extends Endpoint {
    constructor() {
        super({
            name: "Panel",
            description: "Admin Panel",
            route: "/panel/logs",
            method: "GET"
        });
    }

    async run(req, res) {
        if (!req.session || !req.session.token) return res.redirect("/panel/login?error=4");
        return res.render("panel/views/layout", {
            title: "Logs",
            active: "logs",
            content: "logs.ejs",
            data: { }
        });
    }
}

module.exports = PanelLogs;
