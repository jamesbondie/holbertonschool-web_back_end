#!/usr/bin/env python3
"""This module provides a function to create task runs wait_random."""
import asyncio
wait_random = __import__('0-basic_async_syntax').wait_random


def task_wait_random(max_delay: int) -> asyncio.Task:
    """Creates and returns an asyncio Task for the wait_random."""
    return asyncio.create_task(wait_random(max_delay))
