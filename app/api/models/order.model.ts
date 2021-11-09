
export class OrderDto {
  userId?: string;
  organizationId?: string;
  createdBy?: string;
  createdAt?: string;
  discount?: number;
  subtotal?: number;
  tax?: string;
  status?: string;
  lines?: OrderLineDto[];
}

export class OrderLineDto {
  id?: string;
  orderId?: string;
  courseId?: string;
  courseTitle?: string;
  quantity?: number;
  price?: number;
  cost?: number;
  discount?: number;
  total?: number;
  status?: string;
}