#!/usr/bin/env python3
import asyncio
import time
wait_n = __import__('1-concurrent_coroutines').wait_n
"""
This module measures the average time taken for 'n' asynchronous operations 
by timing the execution of the wait_n function.
"""


def measure_time(n: int, max_delay: int) -> float:
    """
    Measures and returns the average time per operation for 'n' calls to wait_n."""
    start_time = time.time()
    asyncio.run(wait_n(n, max_delay))
    total_time = time.time() - start_time
    return total_time / n
