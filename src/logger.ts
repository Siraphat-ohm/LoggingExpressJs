import { createLogger, format, transports } from "winston";


const logger = createLogger({
    level: "silly",
    format: format.combine(
        format.timestamp({
            format: "YYYY-MM-DD HH:mm:ss"
        }),
        format.label({ label: "meow" }),
        format.prettyPrint()
    ),
    transports: [ 
        new transports.File({
            filename: "logs/example.log"
        }),
        new transports.File({
            level:"error",
            filename: "logs/error.log"
        })
    ],
})

export default logger;