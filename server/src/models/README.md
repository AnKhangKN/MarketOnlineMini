User model
- Cần kiểm tra sản phẩm, shop yêu thích có đang trùng hay không nếu có thì không đc thêm.
- Giới hạn số lượng sản phẩm, shop yêu thích, địa chỉ để tránh spam.
- Ví người dùng có thẻ dùng để mua sản phẩm từ ví hủy đang hàng đã thanh toán tiền cũng sẽ trả về ví.

Shop model
- Kiểm tra nếu đang "bị cấm" đang trong "thời gian ban" hoặc đang "chờ duyệt" thì không hiển thị shop và sản phẩm của shop.
- Nếu vẫn còn trạng thái "pending" sẽ không được báo cáo tiếp shop hiện tại đối với mỗi người dùng.
- Follower sẽ tăng nếu shop được theo dỗi.
- Khi shop bị cấm hoặc bị ban sẽ có nội dung lỗi và ai là người cấm (để có thể khiếu nại).

Product model
- Kiểm tra nếu đang "bị cấm" đang trong "thời gian ban" thì không hiển thị.
- Nếu vẫn còn trạng thái "pending" sẽ không được báo cáo tiếp sản phẩm hiện tại đối với mỗi người dùng.
- Người dùng chỉ có thể chấm điểm khi đã nhận hàng thành công.
- Sản phẩm sẽ bị trừ số lượng trong kho mỗi khi đang hàng thành công.
- Follower sẽ tăng nếu sản phẩm được theo dỗi.
- Số lượt bán sẽ tăng nếu sản phẩm đã giao hàng thành công.
- Khi sản phẩm bị cấm hoặc bị ban vĩnh viễn sẽ có nội dung lỗi và ai là người cấm (để có thể khiếu nại).
- "rating" sẽ tính trung bình từ các review ở model Review.

Order model
- Lưu lại các đơn hàng người dùng đã mua.
- Khi người dùng hủy đơn hàng cần cung cấp lý do.
- Trạng thái đơn hàng tổng sẽ chuyển thành complete nếu tất cả sản phẩm đã đến tay khách hàng.
- Khi người dùng nhận được hàng có thể nhận được hàng từng thời điểm khác nhau.
- Khi người dùng muốn trả hàng cần có lý do cụ thể cung cấp hình ảnh.
- Khi trạng thái của sản phẩm là "shipped" bạn xác nhận đơn hàng và sau đó có thể đánh giá sản phẩm này, các comment của sản phẩm này sẽ được hiển thị ở chi tiết sản phẩm.

Cart model
- Chỉ những sản phẩm nào được chọn mua mới mất trong giỏ hàng còn lại sẽ còn.

Chat model
