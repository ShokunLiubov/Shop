$.confirm = function(options) {
    return new Promise((resolve, reject) => {
        const modal = $.modal({
            title: options.title,
            width: '400px',
            content: options.content,
            onClose() {
                modal.destroy()
            },
            closable: false,
            footerButtons: [
                {text: 'Add in favorite', type: 'danger', handler() {
                    modal.close()
                    resolve()
                }},
                {text: 'Cansel', type: 'secondary', handler() {
                    modal.close()
                    reject()
                }}
            ]
        })
        setTimeout(() => modal.open(), 100)
    })
}