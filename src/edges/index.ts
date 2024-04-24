import { MarkerType, type Edge, type EdgeTypes } from "reactflow";

const edgeType = 'smoothstep';

export const initialEdges = [
    {
      id: 'float-machine-1-edge',
      source: 'float-machine-1',
      type: edgeType,
      target: 'float-tank-1',
      markerEnd: {
        type: MarkerType.ArrowClosed,
        width: 10,
        height: 10,
        color: '#1e1e1e',
      },
      style: {
        strokeWidth: 2,
        stroke: '#1e1e1e',
      },
    },
    {
      id: 'float-machine-2-edge',
      source: 'float-machine-2',
      type: edgeType,
      target: 'float-tank-1',
      markerEnd: {
        type: MarkerType.ArrowClosed,
        width: 10,
        height: 10,
        color: '#1e1e1e',
      },
      style: {
        strokeWidth: 2,
        stroke: '#1e1e1e',
      },
    },
    {
      id: 'float-tank-1-edge',
      source: 'float-tank-1',
      type: edgeType,
      target: 'float-tank-2',
      markerEnd: {
        type: MarkerType.ArrowClosed,
        width: 10,
        height: 10,
        color: '#1e1e1e',
      },
      style: {
        strokeWidth: 2,
        stroke: '#1e1e1e',
      },
    },
    {
      id: 'float-tank-2-edge',
      source: 'float-tank-2',
      type: edgeType,
      target: 'float-tank-3',
      markerEnd: {
        type: MarkerType.ArrowClosed,
        width: 10,
        height: 10,
        color: '#1e1e1e',
      },
      style: {
        strokeWidth: 2,
        stroke: '#1e1e1e',
      },
    },
    {
      id: 'float-tank-3-edge',
      source: 'float-tank-3',
      type: 'edgeType',
      target: 'float-tank-4',
      markerEnd: {
        type: MarkerType.ArrowClosed,
        width: 10,
        height: 10,
        color: '#1e1e1e',
      },
      style: {
        strokeWidth: 2,
        stroke: '#1e1e1e',
      },
    },
    {
      id: 'float-tank-4-edge',
      source: 'float-tank-4',
      type: edgeType,
      target: 'float-tank-5',
      markerEnd: {
        type: MarkerType.ArrowClosed,
        width: 10,
        height: 10,
        color: '#1e1e1e',
      },
      style: {
        strokeWidth: 2,
        stroke: '#1e1e1e',
      },
    },
    {
      id: 'float-tank-5-edge',
      source: 'float-tank-5',
      type: edgeType,
      target: 'float-tank-6',
      markerEnd: {
        type: MarkerType.ArrowClosed,
        width: 10,
        height: 10,
        color: '#1e1e1e',
      },
      style: {
        strokeWidth: 2,
        stroke: '#1e1e1e',
      },
    },
       {
      id: 'float-tank-5-to-4-edge',
      source: 'float-tank-5',
      type: edgeType,
      target: 'float-tank-4',
      markerEnd: {
        type: MarkerType.ArrowClosed,
        width: 10,
        height: 10,
        color: '#1e1e1e',
      },
      style: {
        strokeWidth: 2,
        stroke: '#1e1e1e',
      },
    },
    {
      id: 'float-tank-6-to-5-edge',
      source: 'float-tank-6',
      type: edgeType,
      target: 'float-tank-5',
      markerEnd: {
        type: MarkerType.ArrowClosed,
        width: 10,
        height: 10,
        color: '#1e1e1e',
      },
      style: {
        strokeWidth: 2,
        stroke: '#1e1e1e',
      },
    },
    {
      id: 'float-tank-8-to-7-edge',
      source: 'float-tank-8',
      type: edgeType,
      target: 'float-tank-7',
      markerEnd: {
        type: MarkerType.ArrowClosed,
        width: 10,
        height: 10,
        color: '#1e1e1e',
      },
      style: {
        strokeWidth: 2,
        stroke: '#1e1e1e',
      },
      },
    {
      id: 'float-tank-9-to-7-edge',
      source: 'float-tank-9',
      type: 'step',
      target: 'float-tank-7',
      markerEnd: {
        type: MarkerType.ArrowClosed,
        width: 10,
        height: 10,
        color: '#1e1e1e',
      },
      style: {
        strokeWidth: 2,
        stroke: '#1e1e1e',
      },
    },
    {
      id: 'float-tank-2-to-9-edge',
      source: 'float-tank-2',
      type: 'step',
      target: 'float-tank-9',
      markerEnd: {
        type: MarkerType.ArrowClosed,
        width: 10,
        height: 10,
        color: '#1e1e1e',
      },
      style: {
        strokeWidth: 2,
        stroke: '#1e1e1e',
      },
    },
    {
      id: 'float-tank-1-to-8-edge',
      source: 'float-tank-1',
      type: edgeType,
      target: 'float-tank-8',
      markerEnd: {
        type: MarkerType.ArrowClosed,
        width: 10,
        height: 10,
        color: '#1e1e1e',
      },
      style: {
        strokeWidth: 2,
        stroke: '#1e1e1e',
      },
    },
    {
      id: 'float-tank-10-to-9-edge',
      source: 'float-tank-10',
      type: edgeType,
      target: 'float-tank-9',
      markerEnd: {
        type: MarkerType.ArrowClosed,
        width: 10,
        height: 10,
        color: '#1e1e1e',
      },
      style: {
        strokeWidth: 2,
        stroke: '#1e1e1e',
      },
    },
    {
      id: 'float-tank-3-to-10-edge',
      source: 'float-tank-3',
      type: edgeType,
      target: 'float-tank-10',
      markerEnd: {
        type: MarkerType.ArrowClosed,
        width: 10,
        height: 10,
        color: '#1e1e1e',
      },
      style: {
        strokeWidth: 2,
        stroke: '#1e1e1e',
      },
    },
    {
      id: 'float-tank-3-to-1-2-sump',
      source: 'float-tank-3',
      type: 'step',
      target: 'float-sump-1',
      markerEnd: {
        type: MarkerType.ArrowClosed,
        width: 10,
        height: 10,
        color: '#1e1e1e',
      },
      style: {
        strokeWidth: 2,
        stroke: '#1e1e1e',
      },
    }
  ] satisfies Edge[];

export const edgeTypes = {
  // Add your custom edge types here!\
} satisfies EdgeTypes;
