1. Chạy project: npm run dev
2. Chạy jsonserver: json-server --watch database.json -p 9999
3. Phúc Lâm: Vấn đề gặp phải:

- Đầu tiên dùng fomik để validate nhưng datepicker của antd với react formik có vẻ bị conifg
  - đầu tiên là phải viết riêng onChange, onBlur riêng cho datepicker không dùng trực tiếp của formik đc
  - lỗi hiện thông báo lỗi cho date picker ở phần capital form submit phần bạn Tùng làm không hiện lỗi được. của em thì ở
    ở modal approve nếu ấn nút clear date thì nó chưa báo lỗi ngay
  - lỗi ở datepicker phần project start date ở phần project detail. Khi click vào sự kiện onBlur đã kích hoạt để báo lỗi
    . Đúng ra phải chờ khi thoát khỏi datepicker mới báo lỗi
- Lỗi tương tự với multi select của antd cũng phải viết onChange onBlur riêng
- Một vấn là hiệu ứng upload file rất xấu nhưng không fix được
- Vì các component cho trang submit project chưa viết hoàn thiện lên ở trang view project detail em đã đã phải viết riêng lại nhiều component con cho thư mục ProjectDetail trong ProjectListPage. Và hiện chưa common

5. Vấn đề chung của cả hai:

- Viết common component cho các input cho upload, select. Nhưng sau đó mới nhận ra là chưa tính đến phải kết hợp với fomrik. Dẫn đến hiện tượng là nhưng sự kiện onChange, onBlur, và phần báo lỗi của formik mỗi lần gọi component phải viết lại lần nữa
  6.Link phân công việc:
  https://docs.google.com/spreadsheets/d/1HP_DHtG9nBm5l_a1UDeQ_FYiNy_1WaOAJP6nNOJgsM4/edit?gid=1180668294#gid=1180668294
