import argparse

# Req. 2-1	Config.py 파일 생성

parser = argparse.ArgumentParser(description='Process datasets.')
# 캡션 데이터가 있는 파일 경로
parser.add_argument('--caption_file_path', type=str, default='.\\datasets\\captions.csv')
# 이미지 파일들이 저장된 경로
parser.add_argument('--image_file_path', type=str, default='.\\datasets\\images')

args = parser.parse_args()

# print(args.caption_file_path)
# print(args.image_file_path)
