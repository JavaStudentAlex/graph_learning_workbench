"""Celery instance"""
from tqdm import tqdm
from celery import Celery
import time

from ml.link_prediction import predict_edges
from preprocessing.parsing import from_dataframe
from preprocessing.loading import download_network_files

celery_queue = Celery(
    __name__,
    broker="amqp://localhost:5672",
    backend="redis://localhost:6379"
)

celery_queue.conf.update(
    accept_content={"pickle"},
    task_serializer="pickle",
    result_serializer="pickle",
    event_serializer="pickle"
)

@celery_queue.task
def download_task(*args, **kwargs):
    return download_network_files(*args, **kwargs)

@celery_queue.task
def convert_task(*args, **kwargs):
    return from_dataframe(*args, **kwargs)

@celery_queue.task
def edge_prediction_task(*args, **kwargs):
    return predict_edges(*args, **kwargs)
