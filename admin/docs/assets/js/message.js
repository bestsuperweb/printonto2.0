<script type="text/javascript">
    $(function () {
        $("#treeview").shieldTreeView({
            dataSource: dataSrc
        });

        $("#grid").shieldGrid({
            dataSource: {
                data: gridData
            },
            sorting: {
                multiple: true
            },
            paging: {
                pageSize: 12,
                pageLinksCount: 10
            },
            selection: {
                type: "row",
                multiple: true,
                toggle: false
            },
            columns: [
                { field: "check", title: "&nbsp;", width: "2em", attributes: { style: "text-align: center;" } },
                { field: "icon", title: "&nbsp;", width: "2em", attributes: { style: "text-align: center;" } },
                { field: "message", title: "Subject", width: "17em" },
                { field: "attach", title: "&nbsp;", width: "2em", attributes: { style: "text-align: center;" } },
                { field: "date", title: "Delivered", width: "6em" }
            ]
        });
    })
</script>