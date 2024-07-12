$(document).ready(function() {

    function fetchPromotions() {
        $.ajax({
            url: 'http://localhost:8080/api/promotions/all',
            method: 'GET',
            dataType: 'json',
            success: function(data) {
                let tableBody = $('#promotionTable tbody');
                tableBody.empty();

                data.forEach(function(promotion) {
                    let row = '<tr>' +
                        '<td>' + promotion.id + '</td>' +
                        '<td>' + promotion.title + '</td>' +
                        '<td>' + promotion.startDate + '</td>' +
                        '<td>' + promotion.endDate + '</td>' +
                        '<td>' + promotion.level + '</td>' +
                        '<td>' + promotion.details + '</td>' +
                        '<td>' +
                        '<button class="btn btn-primary btn-sm btn-edit" data-id="' + promotion.id + '">Edit</button>' +
                        '<button class="btn btn-danger btn-sm btn-delete ms-1" data-id="' + promotion.id + '">Delete</button>' +
                        '</td>' +
                        '</tr>';
                    tableBody.append(row);
                });

                $('.btn-edit').click(function() {
                    let promotionId = $(this).attr('data-id');
                    editPromotion(promotionId);
                });

                $('.btn-delete').click(function() {
                    let promotionId = $(this).attr('data-id');
                    deletePromotion(promotionId);
                });
            },
            error: function(xhr, status, error) {
                console.log("loi")
                console.error('Error fetching promotions:', error);
            }
        });
    } // show list ok

    function deletePromotion(promotionId) {
        // Hiển thị hộp thoại xác nhận
        if (confirm("Bạn có chắc chắn muốn xóa khuyến mãi này?")) {
            $.ajax({
                url: `http://localhost:8080/api/promotions/delete/` + promotionId,
                method: 'DELETE',
                success: function() {
                    fetchPromotions();
                },
                error: function(xhr, status, error) {
                    console.error('Error deleting promotion:', error);
                }
            });
        } else {
            console.log('User cancelled delete action');
        }
    } // delete ok

    function searchByLevel(level) {
        $.ajax({
            url: 'http://localhost:8080/api/promotions/search/' + level,
            method: 'GET',
            dataType: 'json',
            success: function(data) {
                let tableBody = $('#promotionTable tbody');
                tableBody.empty();

                data.forEach(function(promotion) {
                    let row = '<tr>' +
                        '<td>' + promotion.id + '</td>' +
                        '<td>' + promotion.title + '</td>' +
                        '<td>' + promotion.startDate + '</td>' +
                        '<td>' + promotion.endDate + '</td>' +
                        '<td>' + promotion.level + '</td>' +
                        '<td>' + promotion.details + '</td>' +
                        '<td>' +
                        '<button class="btn btn-primary btn-sm btn-edit" data-id="' + promotion.id + '">Edit</button>' +
                        '<button class="btn btn-danger btn-sm btn-delete ms-1" data-id="' + promotion.id + '">Delete</button>' +
                        '</td>' +
                        '</tr>';
                    tableBody.append(row);
                });

                $('.btn-edit').click(function() {
                    let promotionId = $(this).attr('data-id');
                    editPromotion(promotionId);
                });

                $('.btn-delete').click(function() {
                    let promotionId = $(this).attr('data-id');
                    deletePromotion(promotionId);
                });
            },
            error: function(xhr, status, error) {
                console.log(data)
                console.error('Error searching promotions by level:', error);
            }
        });
    } // search ok

    $('#searchButton').click(function() {
        let level = $('#searchInput').val().trim();
        searchByLevel(level);
    }); // search oke



    function editPromotion(promotionId) {
        $.ajax({
            url: `http://localhost:8080/api/promotions/edit/${promotionId}`,
            method: 'PUT',
            dataType: 'json',
            success: function(promotion) {
                $('#editPromotionModal').modal('show');

                $('#editPromotionId').val(promotion.id);
                $('#editPromotionTitle').val(promotion.title);
                $('#editPromotionStartDate').val(promotion.startDate);
                $('#editPromotionEndDate').val(promotion.endDate);
                $('#editPromotionLevel').val(promotion.level);
                $('#editPromotionDetails').val(promotion.details);


            },
            error: function(xhr, status, error) {
                console.error('Error fetching promotion details:', error);
            }
        });
    }

    fetchPromotions();
});

























