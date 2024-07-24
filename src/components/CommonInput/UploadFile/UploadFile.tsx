import React, { useState } from "react";
import { Image, Upload } from "antd";
import type { GetProp, UploadFile, UploadProps } from "antd";

import { UploadFileWarraper } from "./styled";
import { UploadFileProps } from "./UploadFileType";
import { UploadBoxIcon } from "../../../Icon";
//FileType: Định nghĩa kiểu dữ liệu của file tải lên.
type FileType = Parameters<GetProp<UploadProps, "beforeUpload">>[0];

//getBase64: Hàm chuyển đổi file thành base64 để xem trước.
const getBase64 = (file: FileType): Promise<string> =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = (error) => reject(error);
  });

const UploadFile: React.FC<UploadFileProps> = ({ width, height, label }) => {
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState("");
  const [fileList, setFileList] = useState<UploadFile[]>([]);

  const handlePreview = async (file: UploadFile) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj as FileType);
    }

    setPreviewImage(file.url || (file.preview as string));
    setPreviewOpen(true);
  };

  const handleChange: UploadProps["onChange"] = ({ fileList: newFileList }) => {
    setFileList(newFileList);
  };

  const beforeUpload = () => {
    return false;
  };

  const uploadButton = (
    <button style={{ border: 0, background: "none" }} type="button">
      <UploadBoxIcon />
      <div style={{ marginTop: 8 }} className="text-style">
        {label}
      </div>
    </button>
  );
  return (
    <>
      <UploadFileWarraper $width={`${width}`} $height={`${height}`}>
        <Upload
          listType="picture-card"
          fileList={fileList}
          onPreview={handlePreview}
          onChange={handleChange}
          beforeUpload={beforeUpload}
        >
          {fileList.length >= 1 ? null : uploadButton}
        </Upload>
        {previewImage && (
          <Image
            wrapperStyle={{ display: "none" }}
            preview={{
              visible: previewOpen,
              onVisibleChange: (visible) => setPreviewOpen(visible),
              afterOpenChange: (visible) => !visible && setPreviewImage(""),
            }}
            src={previewImage}
          />
        )}
      </UploadFileWarraper>
    </>
  );
};

export default UploadFile;
