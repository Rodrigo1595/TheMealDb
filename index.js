$(function () {
    $("#consumir").click(function (e) {
        $.get("https://www.themealdb.com/api/json/v1/1/categories.php",
            function (data, textStatus, jqXHR) {
                if (data.categories) {
                    // console.log("Datos de categorias")
                    // console.table(data.categories)
                    $.each(data.categories, function (i, item) {
                        const tableRow = `
                        <tr>
                            <th scope="row">${item.idCategory}</td>
                            <td>${item.strCategory}</td>
                            <td><img src=${item.strCategoryThumb}></img></td>
                            <td>${item.strCategoryDescription}</td>
                        </tr>
                     `
                        $("#menu").append(tableRow);
                    });
                } else {
                    console.log("There's no data to show" + data)
                }
            }
        );

    });

});
