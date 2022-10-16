import gdown
file_url = 'https://drive.google.com/uc?id=1l4PJXbhPXyH8_PaDkthwjz2Tjjn-mNAb'
output='model_CWI_full.h5'
gdown.download(file_url, output, quiet=False)